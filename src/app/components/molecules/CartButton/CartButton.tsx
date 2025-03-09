import { ICartItem } from "@interfaces";
import { Button } from "@components/atoms";
import styles from "./CartButton.module.scss";
import React from "react";

interface CartButtonState {
  cartCount: number;
}

class CartButton extends React.Component<object, CartButtonState> {
  public constructor(props: object) {
    super(props);
    this.state = {
      cartCount: 0,
    };
  }

  private getCartCount = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      const totalAmount = cartItems.reduce((sum: number, cartItem: ICartItem) => sum + cartItem.amount, 0);
      this.setState({ cartCount: totalAmount });
    } else {
      this.setState({ cartCount: 0 });
    }
  };

  public componentDidMount = () => {
    this.getCartCount();
    window.addEventListener("storage", this.getCartCount);
  }

  public componentWillUnmount = () => {
    window.removeEventListener("storage", this.getCartCount);
  }

  public render() {
    return (
      <div className={styles.cart}>
        <Button variant="primary" iconStart="cart"/>
          {
            this.state.cartCount > 0 && 
            <p className={styles.cart__number}>{this.state.cartCount}</p>
          }
      </div>
    );
  }
}

export default CartButton;