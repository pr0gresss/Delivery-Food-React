export interface INavItem {
  label: string,
  link: string,
}

export const headerNavigationLinks: INavItem[] = [
  {
    label: "Home",
    link: "/home"
  },
  {
    label: "Menu",
    link: "/menu"
  },
  {
    label: "Company",
    link: "/company"
  },
  {
    label: "Login",
    link: "/sign-in"
  }
];
