import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@features/cart/cartSlice";
import CartButton from "../app/components/molecules/CartButton/CartButton";
import "@testing-library/jest-dom";
import { IProduct } from "@interfaces";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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

  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: { cart: { items: [mockCartItem] } },
  });

  render(
    <Provider store={store}>
      <CartButton />
    </Provider>
  );

  return store;
};

describe("CartButton", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });
  it("renders button without number badge when cart is empty", () => {
    renderWithStore(0);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const badge = screen.queryByText("0");
    expect(badge).not.toBeInTheDocument();
  });

  it("renders number badge with total items when cart is not empty", () => {
    renderWithStore(5);

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls navigate function when button is clicked", () => {
    renderWithStore(1);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/order");
  });
});
