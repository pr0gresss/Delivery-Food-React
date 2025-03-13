import Footer from "@components/organisms/Footer/Footer";
import Header from "@components/organisms/Header/Header";
import styles from "./MenuPage.module.scss";
import ProductList from "@components/organisms/ProductList/ProductList";
import TooltipElement from "@components/atoms/TooltipElement/TooltipElement";
import { testProducts } from "./productsData";


const MenuPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h1 className={styles.container__header__title}>Browse our menu</h1>
          <p className={styles.container__header__description}>
            Use our menu to place an order online, or <TooltipElement tooltipText="8-800-555-35-35">phone</TooltipElement> our store to place a pickup order. Fast and fresh food.</p>
        </div>
        <ProductList products={testProducts}/>
      </div>
      <Footer/>
    </>
  );
};

export default MenuPage;