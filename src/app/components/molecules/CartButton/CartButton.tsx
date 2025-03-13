import Button from "@components/atoms/Button/Button";
import styles from "./CartButton.module.scss";

const CartButton: React.FC<{ orderLength?: number }> = ({ orderLength }) => {
  return (
    <div className={styles.cart}>
      <Button variant="primary" iconStart="cart"/>
      {orderLength && <p className={styles.cart__number}>{orderLength}</p>}
    </div>
  );
};

export default CartButton;