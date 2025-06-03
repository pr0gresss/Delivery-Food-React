import styles from "./Header.module.scss";
import { headerNavigationLinks } from "./headerNavigationLinks";
import { Button } from "@components/atoms";
import { CartButton } from "@components/molecules";
import { useAppDispatch } from "@store";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@selectors";
import { logOut } from "@slices";

const Header = () => {
	const dispatch = useAppDispatch();
	const user = useSelector(selectCurrentUser);

	return (
		<div className={styles.header}>
			<a href="/">
				<img
					src="src/assets/images/logo.svg"
					className={styles.header__logo}
					alt="logo"
				/>
			</a>
			<div className={styles.header__navigation}>
				<div className={styles.header__navigation__links}>
					{headerNavigationLinks
						.filter(navItem => user || !navItem.authRequired)
						.map(navItem => (
							<a key={navItem.label} href={navItem.link}>
								{navItem.label}
							</a>
						))}
				</div>
				<div className={styles.header__navigation__buttons}>
					{user ? (
						<>
							<CartButton />
							<Button variant="outline" onClick={() => dispatch(logOut())}>
								Log out
							</Button>
						</>
					) : (
						<Button>Log in</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
