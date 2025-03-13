import { ICartItem, IProduct } from "@interfaces";
import styles from "./ProductCard.module.scss";
import { Button, Input } from "@components/atoms";
import React from "react";

interface ProductCardProps {
  product: IProduct,
};

interface ProductCardState {
  amount: number
}

class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
  public constructor(props: ProductCardProps) {
    super(props)

    this.state = {
      amount: 0
    }
  }

  private handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: Number(event.target.value)});
  };

  private getCart = (): ICartItem[] => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  private saveCart = (cart: ICartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  public addToCart = () => {

    const cart = this.getCart();

    const existingItem = cart.find((item) => item.product.id === this.props.product.id);

    if (existingItem) {
      existingItem.amount += this.state.amount;
    } else {
      cart.push({product: this.props.product, amount: this.state.amount});
    }

    this.saveCart(cart); 
    window.dispatchEvent(new Event("storage"));
  };

  public render(): React.ReactNode {
    return (
      <div className={styles.product}>
        <img className={styles.product__image} src={this.props.product.img} alt="product-image"/>
        <div className={styles.product__information}>
          <div className={styles.product__information__header}>
            <div className={styles.product__information__header__title}>{this.props.product.meal}</div>
            <div className={styles.product__information__header__price}>{"$ " + this.props.product.price + " USD"}</div>
          </div>
          <div className={styles.product__information__description}>{this.props.product.instructions.slice(0,100) + "..."}</div>
          <div className={styles.product__information__actions}>
            <Input type="number" defaultValue={1} min={1} max={99} inputSize="small" onChange={this.handleAmountChange}/>
            <Button size="small" onClick={this.addToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;