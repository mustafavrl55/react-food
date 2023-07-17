import React from "react";

const CardItem = ({id, name, price, image, alt, count, basket ,setBasket}) => {

  const increaseButton = () => {

    console.log("arttır")
  }

  const decreaseButton = () => {
    console.log("azalt")
  }
 
  return (
    <li>
      <div className="plate">
        <img
          src={`/images/${image}`}
          alt={alt}
          className="plate"
        />
        <div className="quantity">1</div>
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price}</p>
      </div>
      <div className="quantity__wrapper">
        <button onClick={() => decreaseButton () } className="decrease">
          <img src="/images/chevron.svg" />
        </button>
        <div className="quantity">{count}</div>
        <button onClick={() => increaseButton () } className="increase">
          <img src="/images/chevron.svg" />
        </button>
      </div>
      <div className="subtotal">${price} </div>
    </li>
  );
};

export default CardItem;
