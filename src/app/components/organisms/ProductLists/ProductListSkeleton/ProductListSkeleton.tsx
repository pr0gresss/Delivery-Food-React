import { TCategory } from "@types";
import styles from "./ProductListSkeleton.module.scss";
import { Button } from "@components/atoms";
import { ProductCardSkeleton } from "@components/molecules";

const ProductList = () => {
  const productsPerPage = 6;
  const productCategories: TCategory[] = ["Dessert", "Breakfast", "Dinner"];
  const currentCategory = productCategories[0];

  return (
    <div className={styles.container}>
      <div className={styles.container__categories}>
        {productCategories.map((category) => (
          <Button variant={currentCategory == category ? "primary" : "outline"} key={category} disabled>
            {category}
          </Button>
        ))}
      </div>
      <div className={styles.container__products}>
        {Array.from({ length: productsPerPage }, (_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
      <Button disabled>See more</Button>
    </div>
  );
};

export default ProductList;
