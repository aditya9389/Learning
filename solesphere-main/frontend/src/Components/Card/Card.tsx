import React from "react";
import "./Card.css";

interface CardProps {
  item: {
    image_url: string;
    productName: string;
    productColor: string;
    size: string;
    id: number;
    price: number;
  };
  delete: (item: any) => void;
  updateQuantity: (id: number, qty: number) => void;
}

function Card(props: CardProps) {
  console.log(props);
  const handleDelete = (event: React.MouseEvent<HTMLImageElement>) => {
    props.delete(props.item);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.updateQuantity(props.item.id, +event.target.value);
  };

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <img
            src={`http://localhost:5000/${props.item.image_url}`}
            className="card-img"
            alt="Product"
          />
        </div>
        <div className="grid-item">
          <h3>{props.item.productName}</h3>
          <p>
            <b style={{ fontWeight: "bold" }}>Color: </b>
            {props.item.productColor}
          </p>
          <p>
            <b style={{ fontWeight: "bold" }}>Size: </b>
            {props.item.size}
          </p>
          <select className="select-box" onChange={handleSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="grid-item right">
          <p className="price-rate">$ {props.item.price}</p>
          <img
            className="text-height card-icon"
            onClick={handleDelete}
            src="assets/images/delete.png"
            alt="Delete"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
