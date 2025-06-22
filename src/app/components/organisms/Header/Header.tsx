import styles from "./Header.module.scss";
import { headerNavigationLinks } from "./headerNavigationLinks";
import { Button } from "@components/atoms";
import { CartButton, ThemeButton } from "@components/molecules";
import { selectCurrentUser, logOut } from "@features/auth";
import { useAppDispatch } from "@store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut()).then(() => navigate("/"));
  };

  return (
    <div className={styles.header}>
      <a onClick={() => navigate("/")}>
        <img src="src/assets/images/logo.svg" className={styles.header__logo} alt="logo" />
      </a>
      <div className={styles.header__navigation}>
        <div className={styles.header__navigation__links}>
          {headerNavigationLinks
            .filter((navItem) => user || !navItem.authRequired)
            .map((navItem) => (
              <a key={navItem.label} onClick={() => navigate(navItem.link)}>
                {navItem.label}
              </a>
            ))}
        </div>
        <div className={styles.header__navigation__buttons}>
          <ThemeButton />
          {user ? (
            <>
              <CartButton />
              <Button variant="outline" onClick={handleLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate("/auth")}>Log in</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
