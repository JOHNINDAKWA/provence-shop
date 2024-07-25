import { useContext } from "react";
import "./Cart.css";
import { TfiClose } from "react-icons/tfi";
import { FaPaypal } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CartContext } from "../../components/CartContext";

const Cart = ({ toggleCartVisibility }) => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <TfiClose onClick={toggleCartVisibility} className="close-cart" />
        </div>

        {/* if cart is emty*/}
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className="jcb">
            <div className="cart-items">
              {cartItems.map((item, index) => {
                const itemTotal = (typeof item.price === 'number' ? item.price : parseFloat(item.price)) * item.quantity;
                return (
                  <div key={index} className="cart-item">
                    <img src={item.imgSrc} alt={item.description} />
                    <div className="cart-item-details">
                      <div className="cart-quantity">
                        <h4>{item.description}</h4>
                        <p>Kshs.{(typeof item.price === 'number' ? item.price.toFixed(2) : item.price)}</p>
                        <div className="input-number-exact">
                          <button onClick={() => decrementQuantity(item.id)}>-</button>
                          <input type="number" min="1" value={item.quantity} readOnly />
                          <button onClick={() => incrementQuantity(item.id)}>+</button>
                        </div>
                      </div>

                        <div className="cart-remove">
                        <strong>Total: Kshs.{itemTotal.toFixed(2)}</strong>
                        <p className="remove-from-cart" onClick={() => removeFromCart(item.id)}>Remove</p>
                        </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div >
              <div className="subtotal">
                <h4>Overall Total</h4>
                <h1>Kshs.{cartItems.reduce((total, item) => {
                  const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
                  return total + price * item.quantity;
                }, 0).toFixed(2)}</h1>
              </div>

              <p>Taxes and shipping calculated at checkout</p>

              <button className="btn checkout">CHECKOUT</button>
              <button className="shop-pay">Shop<span>Pay</span></button>
              <button className="paypal">
                <FaPaypal className="paypal-icon" />
                <p>
                  Pay<span>Pal</span>
                </p>
              </button>
              <button className="g-pay">
                <FcGoogle />
                <p>Pay</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;