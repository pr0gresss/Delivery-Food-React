export const THEME_KEY = "theme";
export const AUTH_KEY = "user_id";
export const CART_KEY = "cart_items";

export const setLocalValue = (key: string, value: string): void => {
  localStorage.setItem(key, value as string);
};

export const getLocalValue = <T>(key: string): T | null => {
  return (localStorage.getItem(key) as T) ?? null;
};

export const removeLocalValue = (key: string): void => {
  localStorage.removeItem(key);
};
