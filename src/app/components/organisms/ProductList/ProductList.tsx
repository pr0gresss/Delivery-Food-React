import { IProduct } from "@interfaces";
import styles from "./ProductList.module.scss";
import ProductCard from "@components/molecules/ProductCard/ProductCard";
import Button from "@components/atoms/Button/Button";
import { TCategory } from "@types";
import { useMemo, useState } from "react";

export interface ProductListProps {
  products: IProduct[]
}

const productCategories: TCategory[] = ["Dessert", "Breakfast", "Dinner"]

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [currentCategory, setCategory] = useState(productCategories[0])
  const [currentPage, setPage] = useState(1);
  const productsPerPage = 6;

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === currentCategory),
    [products, currentCategory]
  );

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, currentPage * productsPerPage);
  }, [currentPage, filteredProducts]);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__categories}>
        {productCategories.map((category) => 
          <Button 
            variant={currentCategory == category ? "primary" : "outline"} 
            text={category} 
            onClick={() => {
              setCategory(category); 
              setPage(1);
            }}
            key={category}
          />
          )
        }
      </div>
      <div className={styles.container__products}>
        {paginatedProducts.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Button 
        className={styles.container__load} 
        text="See more"
        onClick={loadMoreProducts}
      />
    </div>
  );
};

export default ProductList;