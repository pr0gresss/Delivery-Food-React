import React from "react";
import styles from "./Icon.module.scss"; 

export type TIcon = "cart" | "youtube" | "instagram" | "twitter";

interface IconProps {
  iconName: TIcon; 
  size?: "small" | "medium" | "large";
}

const Icon: React.FC<IconProps> = ({ iconName, size = "medium" }) => {
  return <i className={`${styles.icon} ${styles[size]} ${styles[iconName]}`} />;
};

export default Icon;