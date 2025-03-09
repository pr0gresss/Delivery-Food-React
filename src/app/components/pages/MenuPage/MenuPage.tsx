import { Footer, Header, ProductList } from "@components/organisms";
import { IProduct } from "@interfaces";
import styles from "./MenuPage.module.scss";
import { TooltipElement } from "@components/atoms";
import { ProductService } from "@services";
import React from "react";

interface MenuPageState {
  products: IProduct[],
  isLoading: boolean,
  error: string
}

class MenuPage extends React.Component<object, MenuPageState> {
  private productService: ProductService;

  constructor(props: object) {
    super(props)

    this.state = {
      products: [],
      isLoading: true,
      error: ""
    }

    this.productService = new ProductService();
  }

  public componentDidMount() {
    this.productService
      .getProducts()
      .then((products) => {
        this.setState({ products, isLoading: false });
      })
      .catch(() => {
        this.setState({ error: "Error fetching products", isLoading: false });
      });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header/>
        <div className={styles.container}>
          <div className={styles.container__header}>
            <h1 className={styles.container__header__title}>Browse our menu</h1>
            <p className={styles.container__header__description}>
              Use our menu to place an order online, or <TooltipElement text="phone" tooltipText="8-800-555-35-35"/> our store to place a pickup order. Fast and fresh food.</p>
          </div>
          <ProductList products={this.state.products}/>
        </div>
        <Footer/>
      </>
    );
  }
}

export default MenuPage;