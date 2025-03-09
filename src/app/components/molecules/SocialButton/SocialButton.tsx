import { Icon } from "@components/atoms";
import styles from "./SocialButton.module.scss";
import React from "react";
import { TIcon } from "@types";

interface SocialButtonProps {
  iconName: TIcon,
  link: string
}

class SocialButton extends React.Component<SocialButtonProps> {
  public constructor(props: SocialButtonProps) {
    super(props)
  }

  public render() {
    return (
      <a target="_blank" className={styles.button} href={this.props.link}>
        <Icon iconName={this.props.iconName}/>
      </a>
    );
  }
}

export default SocialButton;