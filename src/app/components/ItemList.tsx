import React from "react";
import { IItemList } from "@interfaces/";

const ItemList: React.FC<IItemList> = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;