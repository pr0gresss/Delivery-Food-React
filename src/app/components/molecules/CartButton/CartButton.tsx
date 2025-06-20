import { Button } from '@components/atoms';
import styles from './CartButton.module.scss';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '@features/cart';

const CartButton = () => {
	const totalItems = useSelector(selectTotalItems);

	return (
		<div className={styles.cart}>
			<Button variant="primary" iconStart="cart" />
			{totalItems > 0 && <p className={styles.cart__number}>{totalItems}</p>}
		</div>
	);
};

export default CartButton;
