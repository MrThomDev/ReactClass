import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Arrow,
  Name,
  Price,
  RemoveButton,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer id={id}>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decrementHandler}>&#10094;</Arrow>
        <span className="value">{quantity}</span>
        <Arrow onClick={incrementHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
