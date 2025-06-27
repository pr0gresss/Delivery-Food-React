import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@features/cart/cartSlice";
import OrderItemCard from "../app/components/molecules/OrderItemCard/OrderItemCard";
import { IProduct } from "@interfaces";
import "@testing-library/jest-dom";

const mockProduct: IProduct = {
  id: "52834",
  meal: "Beef stroganoff",
  category: "Dinner",
  area: "Russian",
  instructions: "Some very long instructions...",
  img: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
  price: 13.26,
};

const renderWithStore = (amount: number = 0) => {
  const mockCartItem = {
    product: mockProduct,
    amount,
  };
  const preloadedState = {
    cart: { items: [mockCartItem] },
  };
  const store = configureStore({ reducer: { cart: cartReducer }, preloadedState });

  render(
    <Provider store={store}>
      <OrderItemCard cartItem={mockCartItem} />
    </Provider>
  );

  return { store, mockCartItem };
};

describe("OrderItemCard", () => {
  it("renders product details correctly", () => {
    const { mockCartItem } = renderWithStore(2);

    expect(screen.getByText(/Beef stroganoff/i)).toBeInTheDocument();

    const img = screen.getByRole("img", { name: /product image/i });
    expect(img).toHaveAttribute("src", mockProduct.img);

    const totalPriceText = `$${(mockProduct.price * mockCartItem.amount).toFixed(2)}`;
    expect(screen.getByText(totalPriceText)).toBeInTheDocument();

    expect(screen.getByRole("spinbutton")).toHaveValue(mockCartItem.amount);
  });

  it("dispatches updateCartItemAmount when amount is changed", () => {
    const { store } = renderWithStore(2);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });

    const updatedItem = store.getState().cart.items.find((item) => item.product.id === mockProduct.id);
    expect(updatedItem?.amount).toBe(5);
  });

  it("dispatches removeFromCart when Delete button is clicked", () => {
    const { store } = renderWithStore(2);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    const itemAfterDelete = store.getState().cart.items.find((item) => item.product.id === mockProduct.id);
    expect(itemAfterDelete).toBeUndefined();
  });
});
