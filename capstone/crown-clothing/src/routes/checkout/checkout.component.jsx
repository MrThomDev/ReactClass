import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, setIsCartOpen, cartTotal } = useContext(CartContext);

  useEffect(() => {
    // Ignoring missing dependency error for setIsCartOpen
    setIsCartOpen(false); // eslint-disable-next-line
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item}></CheckoutItem>;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </CheckoutContainer>
  );
};

export default Checkout;
