import styles from "./Header.module.scss";
import CartButton from "@components/molecules/CartButton/CartButton";

export interface INavItem {
  label: string,
  link: string,
}

const navItems: INavItem[] = [
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

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <img src="src/assets/images/logo.svg" className={styles.header__logo} alt="logo" />
      </a>
      <div className={styles.header__navigation}>
        <div className={styles.header__navigation__links}>
          {navItems.map((navItem) => <a href={navItem.link}>{navItem.label}</a>)}
        </div>
        <div className={styles.header__navigation__cart}>
          <CartButton/>
        </div>
      </div>
    </div>
  );
};

export default Header;