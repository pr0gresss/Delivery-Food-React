import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@features/cart/cartSlice";
import ProductCard from "../app/components/molecules/ProductCard/ProductCard";
import { IProduct, ICartItem } from "@interfaces";
import "@testing-library/jest-dom";

const mockProduct: IProduct = {
  id: "52834",
  meal: "Beef stroganoff",
  category: "Dinner",
  area: "Russian",
  instructions: "Some very long instructions that should be trimmed...",
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
      <ProductCard product={mockProduct} />
    </Provider>
  );

  return store;
};

describe("ProductCard", () => {
  it("renders product information", () => {
    renderWithStore();
    expect(screen.getByText(/Beef stroganoff/i)).toBeInTheDocument();
    expect(screen.getByText(/\$ 13.26 USD/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /product-image/i })).toBeInTheDocument();
  });

  it("adds product to cart with default amount", () => {
    const store = renderWithStore();

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    const cartItem: ICartItem | undefined = store
      .getState()
      .cart.items.find((item) => item.product.id === mockProduct.id);

    expect(cartItem).toBeDefined();
    expect(cartItem?.amount).toBe(1);
  });

  it("adds product with custom quantity", () => {
    const store = renderWithStore();

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    const cartItem = store.getState().cart.items.find((item) => item.product.id === mockProduct.id);

    expect(cartItem?.amount).toBe(3);
  });

  it("resets input to 1 after adding", () => {
    renderWithStore();

    const input = screen.getByRole("spinbutton") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "4" } });
    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(input.value).toBe("1");
  });
});
