import { Button } from "@components/atoms";
import styles from "./CartButton.module.scss";
import { useSelector } from "react-redux";
import { selectTotalItems } from "@features/cart";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
      <Button onClick={() => navigate("/order")} variant="primary" iconStart="cart" />
      {totalItems > 0 && <p className={styles.cart__number}>{totalItems}</p>}
    </div>
  );
};

export default CartButton;
