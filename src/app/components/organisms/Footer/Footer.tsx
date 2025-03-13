import React from "react";
import { SocialButton } from "@components/molecules";
import styles from "./Footer.module.scss";

class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.footer__top__company}>
            <img src="/src/assets/images/logo.svg" alt="logo"/>
            <p>Takeaway & Delivery template for small - medium businesses.</p>
          </div>
          <div className={styles.footer__top__table}>
            <div className={styles.footer__top__table__column}>
              <h4 className={styles.footer__top__table__column__title}>Company</h4>
              <div className={styles.footer__top__table__column__content}>
                <a>Home</a>
                <a>Order</a>
                <a>FAQ</a>
                <a>Contact</a>
              </div>
            </div>
            <div className={styles.footer__top__table__column}>
              <h4 className={styles.footer__top__table__column__title}>Template</h4>
              <div className={styles.footer__top__table__column__content}>
                <a href=" https://www.google.com/">Style Guide</a>
                <a href=" https://www.google.com/">Changelog</a>
                <a href=" https://www.google.com/">License</a>
                <a href=" https://www.google.com/">Webflow University</a>
              </div>
            </div>
            <div className={styles.footer__top__table__column}>
              <h4 className={styles.footer__top__table__column__title}>Flowbase</h4>
              <div className={styles.footer__top__table__column__content}>
                <a>More Clonables</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <hr />
        <div className={styles.footer__bottom__information}>
          <div className={styles.footer__bottom__information__build}>
            Built by <a href="">Flowbase</a> ∙ Powered by <a href="">Webflow</a>
          </div>
          <div className={styles.footer__bottom__information__socials}>
            <SocialButton link="https://x.com" iconName="twitter"/>
            <SocialButton link="https://youtube.com" iconName="youtube"/>
            <SocialButton link="https://instagram.com" iconName="instagram"/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Footer;