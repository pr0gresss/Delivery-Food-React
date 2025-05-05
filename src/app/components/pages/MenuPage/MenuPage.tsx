import { ProductList } from '@components/organisms';
import styles from './MenuPage.module.scss';
import { TooltipElement } from '@components/atoms';
import { getProducts } from '@services';
import { useEffect, useState } from 'react';
import { IProduct } from '@interfaces';
import { MenuLayout } from '@components/templates';

const MenuPage: React.FC = () => {
	const [isLoading, setLoadingState] = useState(false);
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
    setLoadingState(true)
		getProducts()
			.then(res => setProducts(res))
			.catch(err => { throw Error(err.message) })
			.finally(() => setLoadingState(false));
	}, []);

	return (
		<MenuLayout>
			<div className={styles.container}>
				<div className={styles.container__header}>
					<h1 className={styles.container__header__title}>Browse our menu</h1>
					<p className={styles.container__header__description}>
						Use our menu to place an order online, or{' '}
						<TooltipElement tooltipText="8-800-555-35-35">phone</TooltipElement>{' '}
						our store to place a pickup order. Fast and fresh food.
					</p>
				</div>
				{isLoading ? (
					<div className={styles.container__products__empty}>Loading products...</div>
				) : products.length === 0 ? (
					<div className={styles.container__products__empty}>No products available</div>
				) : (
					<ProductList products={products} />
				)}
			</div>
		</MenuLayout>
	);
};

export default MenuPage;
