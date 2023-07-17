import React from "react";

const ProductItem = ({ id, name, price, image, alt, count, basket, setBasket }) => {
 
  const addProduct = (product) => {
    setBasket([...basket, product]);
  };
  const isinCart = basket.find((item) => item.id === id) ? true : false;

  //"In Cart" : "Add Cart"

  return (
    <li>
      <div className="plate">
        <img src={`/images/${image}`} alt={alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price}</p>
        <button
          className={isinCart ? "in-cart" : ""}
          onClick={() => addProduct({ id, name, price, image, alt, count })}
        >
          {isinCart && <img src="/images/check.svg" alt="Check" />}
          {isinCart ? "In Cart" : "Add Cart"}
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
