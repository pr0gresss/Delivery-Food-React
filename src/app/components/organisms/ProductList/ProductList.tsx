import React from "react";
import { IProduct } from "@interfaces";
import { TCategory } from "@types";
import styles from "./ProductList.module.scss";
import { ProductCard } from "@components/molecules";
import { Button } from "@components/atoms";

interface ProductListProps {
  products: IProduct[]
}

interface ProductListState {
  currentCategory: TCategory;
  currentPage: number;
}

class ProductList extends React.Component<ProductListProps, ProductListState> {
  private productsPerPage = 6;
  private productCategories: TCategory[] = ["Dessert", "Breakfast", "Dinner"]

  constructor(props: ProductListProps) {
    super(props);
    this.state = {
      currentCategory: this.productCategories[0],
      currentPage: 1,
    };
  }
  
  protected setCategory = (category: TCategory) => {
    this.setState({ currentCategory: category, currentPage: 1 });
  };

  protected loadMoreProducts = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  get filteredProducts() {
    return this.props.products.filter(
      (product: IProduct) => product.category === this.state.currentCategory
    );
  }

  get paginatedProducts() {
    return this.filteredProducts.slice(0, this.state.currentPage * this.productsPerPage);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.container__categories}>
          {this.productCategories.map((category) => 
            <Button 
              variant={this.state.currentCategory == category ? "primary" : "outline"} 
              text={category} 
              onClick={() => {
                this.setCategory(category); 
              }}
              key={category}
            />
            )
          }
        </div>
        <div className={styles.container__products}>
          {this.paginatedProducts.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <Button 
          className={styles.container__load} 
          text="See more"
          onClick={this.loadMoreProducts}
          disabled={this.paginatedProducts.length >= this.filteredProducts.length}
        />
      </div>
    );
  }
}

export default ProductList;