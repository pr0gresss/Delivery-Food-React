import { ProductList } from "@components/organisms";
import styles from "./MenuPage.module.scss";
import { TooltipElement } from "@components/atoms";
import { MainTemplate } from "@components/templates";
import { useEffect } from "react";
import { IProduct } from "@interfaces";
import { fetchTypedData } from "@slices";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@store";
import { selectFetchResult } from "@selectors";

const fetchProducts = fetchTypedData<IProduct[]>();

const MenuPage = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(selectFetchResult("products"));

  useEffect(() => {
    dispatch(fetchProducts({ url: "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals", key: "products" }));
  }, [dispatch]);

  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h1 className={styles.container__header__title}>Browse our menu</h1>
          <p className={styles.container__header__description}>
            Use our menu to place an order online, or{" "}
            <TooltipElement tooltipText="8-800-555-35-35">phone</TooltipElement> our store to place a pickup order. Fast
            and fresh food.
          </p>
        </div>
        {loading ? (
          <div className={styles.container__products__empty}>Loading products...</div>
        ) : error ? (
          <div className={styles.container__products__empty}>{error}</div>
        ) : data && data.length === 0 ? (
          <div className={styles.container__products__empty}>No products available</div>
        ) : (
          data && <ProductList products={data} />
        )}
      </div>
    </MainTemplate>
  );
};

export default MenuPage;
