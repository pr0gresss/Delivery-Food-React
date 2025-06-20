import { Button } from "@components/atoms";
import styles from "./ThemeButton.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store";
import { selectTheme, toggleTheme } from "@features/theme";
import { setTheme } from "@utils";

const ThemeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTheme(theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button
      className={styles.themeButton}
      iconStart={theme === "dark" ? "moon" : "sun"}
      onClick={handleToggleTheme}
    ></Button>
  );
};

export default ThemeButton;
