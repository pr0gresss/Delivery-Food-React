import React from 'react';
import { SocialButton } from '@components/molecules';
import styles from './Footer.module.scss';
import { footerColumnsContent } from './footerColumns';
import { footerSocialLinks } from './footerSocialLinks';

const Footer: React.FC = () => (
	<div className={styles.footer}>
		<div className={styles.footer__top}>
			<div className={styles.footer__top__company}>
				<img src="/src/assets/images/logo.svg" alt="logo" />
				<p>Takeaway & Delivery template for small - medium businesses.</p>
			</div>
			<div className={styles.footer__top__table}>
				{footerColumnsContent.map(column => (
					<div className={styles.footer__top__table__column}>
						<h4 className={styles.footer__top__table__column__title}>
							{column.columnName}
						</h4>
						<div className={styles.footer__top__table__column__content}>
							{column.columnContent.map(link => (
								<a href={link.link}>{link.title}</a>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
		<div className={styles.footer__bottom}>
			<hr />
			<div className={styles.footer__bottom__information}>
				<div className={styles.footer__bottom__information__build}>
					Built by <a href="">Flowbase</a> ∙ Powered by <a href="">Webflow</a>
				</div>
				<div className={styles.footer__bottom__information__socials}>
					{footerSocialLinks.map(link => (
						<SocialButton link={link.link} iconName={link.icon} />
					))}
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
