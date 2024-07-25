import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./GiftCards.css";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const GiftCards = () => {
  const breadcrumbItems = [
    { label: "All collections", href: "/collections" },
    { label: "Gift Card to Jamiebeck.co", href: "/giftcards" },
  ];

  const [quantity, setQuantity] = useState(1);
  const [selectedDenomination, setSelectedDenomination] = useState("Kshs.25");

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDenominationChange = (event) => {
    setSelectedDenomination(event.target.value);
  };

  return (
    <div className="GiftCards">
      <BreadCrumb items={breadcrumbItems} />

      <div className="GiftCards-container">
        <div className="GiftCards-left">
          <img
            src="https://jamiebeck.co/cdn/shop/files/Gift-Card-Design---Mothers-Day-2024_670x.png?v=1715443184"
            alt="Gift Card Design"
          />
        </div>

        <div className="GiftCards-right">
          <h3>Gift Card to John Indakwa</h3>
          <span>Kshs.2500.00</span>
          <p>Shipping calculated at checkout.</p>

          <div className="form-field">
            <h2>Denominations</h2>
            <div className="form-field__swatch-options">
              {["Kshs.250", "Kshs.500", "Kshs.1000", "Kshs.1500", "Kshs.2000", "Kshs.3000", "Kshs.5000", "Kshs.10000"].map((value) => (
                <label
                  key={value}
                  className={`form-swatch-item ${
                    selectedDenomination === value ? "option--active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="denomination"
                    value={value}
                    checked={selectedDenomination === value}
                    onChange={handleDenominationChange}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div className="input-number">
            <h4>Quantity</h4>
            <div className="input-number-exact">
              <button onClick={decrementQuantity}>-</button>
              <input type="number" min="1" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <div className="btns-cart">
            <button className="cart">Add to Cart</button>
            <button className="shop">Buy with Shop Pay</button>
          </div>

          <div className="payment-more-info">
            <p className="p-link">More payment options</p>
            <h3>Buy a gift card for yourself or send to a loved one.</h3>
            <p className="p-gift">
              These digital gift cards never expire and can be used for any product in our store. You can send the gift manually or schedule it to be sent.
            </p>
            <p className="p-hiws">
              How it works: <a href="https://jamiebeck.co/pages/how-our-gift-cards-work">Learn more</a>
            </p>
          </div>

          <div className="socials">
            <FaFacebook className="facebook" />
            <FaInstagramSquare className="instagram"/>
            <FaTwitter className="twitter"/>
            <FaLinkedin className="linkedin"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
