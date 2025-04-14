export interface IFooterColumn {
  columnName: string,
  columnContent: IColumnContent[]
}

export interface IColumnContent {
  title: string,
  link: string
}

export const footerColumnsContent: IFooterColumn[] = 
[
  {
    columnName: "Company",
    columnContent: [
      {
        title: "Home",
        link:"#",
      },
      {
        title: "Order",
        link:"#",
      },
      {
        title: "FAQ",
        link:"#",
      },
      {
        title: "Contact",
        link:"#",
      },
    ]
  },
  {
    columnName: "Template",
    columnContent: [
      {
        title: "Style Guide",
        link:"https://www.google.com/",
      },
      {
        title: "Changelog",
        link:"https://www.google.com/",
      },
      {
        title: "License",
        link:"https://www.google.com/",
      },
      {
        title: "Webflow University",
        link:"https://www.google.com/",
      },
    ]
  },
  {
    columnName: "Flowbase",
    columnContent: [
      {
        title: "More Clonable",
        link:"#",
      },
    ]
  },
];
