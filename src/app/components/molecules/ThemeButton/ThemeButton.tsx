import { Button } from "@components/atoms";
import styles from "./ThemeButton.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store";
import { selectTheme, toggleTheme } from "@features/theme";
import { getBrowserTheme, setLocalValue, THEME_KEY } from "@utils";

const ThemeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme) {
      setLocalValue(THEME_KEY, theme);
      document.body.setAttribute("data-theme", theme);
    } else {
      return setLocalValue(THEME_KEY, getBrowserTheme());
    }
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
