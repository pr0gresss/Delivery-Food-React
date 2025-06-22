import { Icon } from "@components/atoms";
import styles from "./SocialButton.module.scss";
import React from "react";
import { TIcon } from "@types";

interface SocialButtonProps {
  iconName: TIcon;
  link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ iconName, link }) => (
  <a target="_blank" className={styles.button} href={link}>
    <Icon iconName={iconName} />
  </a>
);

export default SocialButton;
