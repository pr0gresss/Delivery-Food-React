import { ProductList } from "@components/organisms";
import styles from "./MenuPage.module.scss";
import { TooltipElement } from "@components/atoms";
import { MainLayout } from "@components/templates";
import { useFetch } from "@hooks";
import { useEffect } from "react";
import { IProduct } from "@interfaces";

const MenuPage = () => {
  const { data, error, loading, fetchDataWithLogging } = useFetch<IProduct[]>(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );

  useEffect(() => {
    fetchDataWithLogging();
  }, [fetchDataWithLogging]);

  return (
    <MainLayout>
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
          <div className={styles.container__products__empty}>Service error</div>
        ) : data && data.length === 0 ? (
          <div className={styles.container__products__empty}>No products available</div>
        ) : (
          data && <ProductList products={data} />
        )}
      </div>
    </MainLayout>
  );
};

export default MenuPage;
