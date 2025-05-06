import React, { useState } from 'react';
import { IProduct } from '@interfaces';
import { TCategory } from '@types';
import styles from './ProductList.module.scss';
import { Button } from '@components/atoms';
import { ProductCard } from '@components/molecules';

interface ProductListProps {
	products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
	const productsPerPage = 6;
	const productCategories: TCategory[] = ['Dessert', 'Breakfast', 'Dinner'];

	const [currentCategory, setCategory] = useState<TCategory>(
		productCategories[0]
	);
	const [currentPage, setPage] = useState(1);

	const getFilteredProducts = () => {
		return products.filter(product => product.category === currentCategory);
	};

	const getPaginatedProducts = () => {
		return filteredProducts.slice(0, currentPage * productsPerPage);
	};

	const filteredProducts = getFilteredProducts();
	const paginatedProducts = getPaginatedProducts();

	return (
		<div className={styles.container}>
			<div className={styles.container__categories}>
				{productCategories.map(category => (
					<Button
						variant={currentCategory == category ? 'primary' : 'outline'}
						onClick={() => {
							setCategory(category);
							setPage(1);
						}}
						key={category}
					>
						{category}
					</Button>
				))}
			</div>
			<div className={styles.container__products}>
				{paginatedProducts.map((product: IProduct) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
			<Button
				onClick={() => setPage(v => v + 1)}
				disabled={paginatedProducts.length >= filteredProducts.length}
			>
				See more
			</Button>
		</div>
	);
};

export default ProductList;
