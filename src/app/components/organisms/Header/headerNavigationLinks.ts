export interface INavItem {
  label: string,
  link: string,
  authRequired: boolean,
}

export const headerNavigationLinks: INavItem[] = [
  {
    label: "Home",
    link: "/home",
    authRequired: false,
  },
  {
    label: "Menu",
    link: "/menu",
    authRequired: true,
  },
  {
    label: "Company",
    link: "/company",
    authRequired: false,
  },
];
