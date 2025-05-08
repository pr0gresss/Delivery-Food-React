import styles from './Header.module.scss';
import { headerNavigationLinks } from './headerNavigationLinks';
import { Button } from '@components/atoms';
import { useAuth } from '@hooks';
import { CartButton } from '@components/molecules';

const Header = () => {
	const { isAuthenticated, logOut } = useAuth();

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
						.filter(navItem => isAuthenticated() || !navItem.authRequired)
						.map(navItem => (
							<a key={navItem.label} href={navItem.link}>
								{navItem.label}
							</a>
						))}
				</div>
				<div className={styles.header__navigation__buttons}>
					{isAuthenticated() ? (
						<>
							<CartButton />
							<Button variant="outline" onClick={logOut}>
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
