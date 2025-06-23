import styles from "./ProductCardSkeleton.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.product}>
      <div className={`${styles.product__image} ${styles.skeleton}`}></div>
      <div className={styles.product__information}>
        <div className={styles.product__information__header}>
          <div className={`${styles.product__information__header__title} ${styles.skeleton}`}></div>
          <div className={`${styles.product__information__header__price} ${styles.skeleton}`}>
          </div>
        </div>
        <div className={`${styles.product__information__description} ${styles.skeleton}`}></div>
        <div className={`${styles.product__information__actions} ${styles.skeleton}`}>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
