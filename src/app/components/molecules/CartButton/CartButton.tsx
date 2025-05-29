import { Button } from '@components/atoms';
import styles from './CartButton.module.scss';
import { useCart } from '@hooks';

const CartButton = () => {
	const { totalItems } = useCart();

	return (
		<div className={styles.cart}>
			<Button variant="primary" iconStart="cart" />
			{totalItems > 0 && <p className={styles.cart__number}>{totalItems}</p>}
		</div>
	);
};

export default CartButton;
