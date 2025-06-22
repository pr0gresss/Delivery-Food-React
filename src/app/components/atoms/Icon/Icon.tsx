import React from "react";
import styles from "./Icon.module.scss";
import { TIcon } from "@types";

interface IconProps {
  iconName: TIcon;
  size?: "small" | "medium" | "large";
}

const Icon: React.FC<IconProps> = ({ size = "medium", iconName, ...rest }) => (
  <i className={`${styles.icon} ${styles[size!]} ${styles[iconName]}`} {...rest} />
);

export default Icon;
