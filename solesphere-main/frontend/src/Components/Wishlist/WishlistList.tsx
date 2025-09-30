import React from "react";
import WishlistCard from "./WishlistCard";

interface WishlistListProps {
  items: Array<any>;
  deleteItem: (id: number) => void;
  refresh: () => void; // ✅ ADD THIS
}

const WishlistList = (props: WishlistListProps) => {
  const getCards = (itemList: Array<any>) => {
    return itemList.map((item: any) => (
      <WishlistCard
        key={item.id}
        item={item}
        delete={props.deleteItem}
        refresh={props.refresh}
      />
    ));
  };

  return (
    <>
      <div>{props.items && getCards(props.items)}</div>
    </>
  );
};

export default WishlistList;
