import { IProduct } from "@interfaces";
import styles from "./ProductCard.module.scss";
import Button from "@components/atoms/Button/Button";
import Input from "@components/atoms/Input/Input";

export interface ProductCardProps {
  product: IProduct,
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={product.img} alt="product-image"/>
      <div className={styles.product__information}>
        <div className={styles.product__information__header}>
          <div className={styles.product__information__header__title}>{product.meal}</div>
          <div className={styles.product__information__header__price}>{"$ " + product.price + " USD"}</div>
        </div>
        <div className={styles.product__information__description}>{product.instructions.slice(0,100) + "..."}</div>
        <div className={styles.product__information__actions}>
          <Input type="number" min={1} max={99} size="small"/>
          <Button size="small" text="Add to cart"/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;