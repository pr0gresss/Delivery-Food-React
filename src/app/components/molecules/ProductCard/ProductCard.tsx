import { IProduct } from "@interfaces";
import styles from "./ProductCard.module.scss";
import { Button, Input } from "@components/atoms";
import React from "react";

interface ProductCardProps {
  product: IProduct,
  addToCart: (product: IProduct, amount: number) => void
};

interface ProductCardState {
  amount: number
}

class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
  public constructor(props: ProductCardProps) {
    super(props)

    this.state = {
      amount: 1
    }
  }

  private handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: Number(event.target.value)});
  };

  public handleAddToCart = () => {
    const { product, addToCart } = this.props;
    const { amount } = this.state;
    addToCart(product, amount);
    this.setState({ amount: 1 });
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
            <Button size="small" onClick={this.handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;