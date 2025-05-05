import React from "react";
import styles from "./Header.module.scss";
import { CartButton } from "@components/molecules";
import { headerNavigationLinks } from "./headerNavigationLinks";



class Header extends React.Component {
  private headerNavigationLinks = headerNavigationLinks;

  render(): React.ReactNode {
    return (
      <div className={styles.header}>
        <a href="/">
          <img src="src/assets/images/logo.svg" className={styles.header__logo} alt="logo" />
        </a>
        <div className={styles.header__navigation}>
          <div className={styles.header__navigation__links}>
            {this.headerNavigationLinks.map(navItem => <a key={navItem.label} href={navItem.link}>{navItem.label}</a>)}
          </div>
          <div className={styles.header__navigation__cart}>
            <CartButton/>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;