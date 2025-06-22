import { IProduct } from "@interfaces";
import styles from "./ProductCard.module.scss";
import { Button, Input } from "@components/atoms";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@features/cart";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addToCart({ product, amount }));
    setAmount(1);
  };

  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={product.img} alt="product-image" />
      <div className={styles.product__information}>
        <div className={styles.product__information__header}>
          <div className={styles.product__information__header__title}>{product.meal}</div>
          <div className={styles.product__information__header__price}>{"$ " + product.price + " USD"}</div>
        </div>
        <div className={styles.product__information__description}>{product.instructions.slice(0, 100) + "..."}</div>
        <form className={styles.product__information__actions} onSubmit={handleAddToCart}>
          <Input
            type="number"
            defaultValue={1}
            min={1}
            max={99}
            inputSize="small"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <Button size="small" type="submit">
            Add to cart
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
