import "./App.css";
import ProductItem from "./components/ProductItem";
import Products from "./products.json";
import CardItem from "./components/CardItem";
import { useState } from "react";
function App() {

const [basket, setBasket] = useState([])
console.log(basket)
  return (
    <div className="App">
      <div className="wrapper menu">
        <div className="panel">
          <h1>To Go Menu</h1>
          <ul className="menu">
            {Products.map((product) => (
              <ProductItem
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                alt={product.alt}
                count={product.count}
                basket={basket}
                setBasket={setBasket}
              />
            ))}
          </ul>
        </div>
        <div className="panel cart">
          <h1>Your Cart</h1>
          {/* <p class="empty">Your cart is empty.</p> */}
          <ul className="cart-summary">
            {basket.map((item) =>(
              <CardItem
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              alt={item.alt}
              cont={item.count}
              basket={basket}
              setBasket={setBasket}
              />
            ))}
            
          </ul>
          <div className="totals">
            <div className="line-item">
              <div className="label">Subtotal:</div>
              <div className="amount price subtotal">$10.80</div>
            </div>
            <div className="line-item">
              <div className="label">Tax:</div>
              <div className="amount price tax">$1.05</div>
            </div>
            <div className="line-item total">
              <div className="label">Total:</div>
              <div className="amount price total">$11.85</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
