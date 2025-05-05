import { Button } from "@components/atoms";
import styles from "./CartButton.module.scss";
import React from "react";
import { CartContext, ICartContextType } from "@contexts";

class CartButton extends React.Component {
  static contextType = CartContext;
  declare context: ICartContextType;

  public render() {
    const { totalItems } = this.context
    return (
      <div className={styles.cart}>
        <Button variant="primary" iconStart="cart"/>
          {
            totalItems > 0 && 
            <p className={styles.cart__number}>{this.context.totalItems}</p>
          }
      </div>
    );
  }
}

export default CartButton;