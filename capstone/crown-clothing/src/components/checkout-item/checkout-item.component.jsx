import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, clearItemfromCart } =
    useContext(CartContext);
  const { name, quantity, id, price, imageUrl } = item;

  const incrementHandler = () => {
    addItemToCart(item);
  };

  const decrementHandler = () => {
    removeItemFromCart(item);
  };

  const clearItemHandler = () => {
    clearItemfromCart(item);
  };
  return (
    <div className="checkout-item-container" id={id}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
      {/* <div onClick={incrementHandler}>More button</div>
      <div onClick={decrementHandler}>Less button</div>
      <div>Total for row</div> */}
    </div>
  );
};

export default CheckoutItem;
