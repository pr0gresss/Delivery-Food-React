import { ICartItem } from "@interfaces";
import React, { useState } from "react";
import styles from "./OrderItemCard.module.scss";
import { Button, Input } from "@components/atoms";
import { removeFromCart, updateCartItemAmount } from "@features/cart";
import { useDispatch } from "react-redux";

interface IOrderItemCardProps {
  cartItem: ICartItem;
}

const OrderItemCard: React.FC<IOrderItemCardProps> = ({ cartItem }) => {
  const [amount, setAmount] = useState<number>(cartItem.amount);
  const dispatch = useDispatch();

  const handeItemAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);

    setAmount(newAmount);
    dispatch(updateCartItemAmount({ ...cartItem, amount: newAmount }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img className={styles.card__left__image} src={cartItem.product.img} alt="product image" />
        <p>{cartItem.product.meal}</p>
      </div>
      <div className={styles.card__right}>
        <div className={styles.card__right__total}>{`$${(cartItem.product.price * cartItem.amount).toFixed(2)}`}</div>
        <div className={styles.card__right__actions}>
          <Input type="number" min={1} max={99} value={amount} onChange={handeItemAmountChange}></Input>
          <Button onClick={() => dispatch(removeFromCart(cartItem))}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
