import React from "react";
import CardComponent from "./Card";

interface CardListProps {
    items: any[];
    delete: (item: any) => void;
    updateQuantity: (id: number, qty: number) => void;
}

function CardList(props: CardListProps) {
    const getCards = (itemList: any[]) => {
        return itemList.map((item) => (
            <CardComponent
                key={item.id}
                item={item}
                delete={deleteItem}
                updateQuantity={updateQuantity}
            />
        ));
    };

    const deleteItem = (item: any) => {
        props.delete(item);
    };

    const updateQuantity = (id: number, qty: number) => {
        props.updateQuantity(id, qty);
    };

    return (
        <>
            <div>{props.items && getCards(props.items)}</div>
        </>
    );
};

export default CardList;