import Icon, { TIcon } from "@components/atoms/Icon/Icon";
import styles from "./SocialButton.module.scss";

export interface SocialButtonProps {
  iconName: TIcon,
  link: string
}

const SocialButton: React.FC<SocialButtonProps> = ({iconName, link}) => {
  return (
    <a target="_blank" className={styles.button} href={link}>
      <Icon iconName={iconName}/>
    </a>
  );
};

export default SocialButton;