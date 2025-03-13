import React from "react";
import styles from "./Header.module.scss";
import { CartButton } from "@components/molecules";

export interface INavItem {
  label: string,
  link: string,
}

class Header extends React.Component {
  private navItems: INavItem[] = [
    {
      label: "Home",
      link: "/home"
    },
    {
      label: "Menu",
      link: "/menu"
    },
    {
      label: "Company",
      link: "/company"
    },
    {
      label: "Login",
      link: "/sign-in"
    }
  ]

  render(): React.ReactNode {
    return (
      <div className={styles.header}>
        <a href="/">
          <img src="src/assets/images/logo.svg" className={styles.header__logo} alt="logo" />
        </a>
        <div className={styles.header__navigation}>
          <div className={styles.header__navigation__links}>
            {this.navItems.map((navItem) => <a key={navItem.label} href={navItem.link}>{navItem.label}</a>)}
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