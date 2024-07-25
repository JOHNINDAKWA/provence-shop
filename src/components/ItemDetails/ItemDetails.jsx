import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import phoneCasesData from "../../sections/PhoneCases/phoneCasesData";
import fineArtData from "../../sections/FineArt/FineArtData";
import postersData from "../../sections/Posters/PostersData";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./ItemDetails.css";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CartContext } from "../CartContext";

const ItemDetails = () => {
  const { id, category } = useParams();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("iPhone 11");

  // Determine which data source to use based on category
  let item;
  switch (category) {
    case 'phone-cases':
      item = phoneCasesData.find(caseItem => caseItem.id === parseInt(id));
      break;
    case 'fine-art':
      item = fineArtData.find(artItem => artItem.id === parseInt(id));
      break;
    case 'posters':
      item = postersData.find(posterItem => posterItem.id === parseInt(id));
      break;
    default:
      item = null;
      break;
  }

  // Update breadcrumb items based on category
  const breadcrumbItems = [
    { label: "All collections", href: "/collections" },
    { label: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' '), href: `/collections/${category}` },
    { label: item ? item.description : "Item", href: "#" }
  ];

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity,
      selectedSize,
    });
  };

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="item-details">
      <BreadCrumb items={breadcrumbItems} />

      <div className="item-details-container">
        <div className="item-details-left">
          <img src={item.imgSrc} alt={item.description} />
        </div>

        <div className="item-details-right">
          <h3>{item.description}</h3>
          <span>Kshs.{item.price}</span>

          {category === 'phone-cases' && (
            <div className="form-field">
              <h2>Sizes</h2>
              <div className="form-field__swatch-options">
                {["iPhone 11", "iPhone 11 Pro", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 Pro"].map((size) => (
                  <label
                    key={size}
                    className={`form-swatch-item ${
                      selectedSize === size ? "option--active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={handleSizeChange}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="input-number">
            <h4>Quantity</h4>
            <div className="input-number-exact">
              <button onClick={decrementQuantity}>-</button>
              <input type="number" min="1" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <div className="btns-cart">
            <button className="cart" onClick={handleAddToCart}>Add to Cart</button>
            <button className="shop">Buy with Shop Pay</button>
          </div>

          <div className="payment-more-info">
            <p className="p-link">More payment options</p>
            <h3>Buy this item for yourself or as a gift.</h3>
            <p className="p-gift">
              This item is designed to fit various models and offers excellent protection.
            </p>
            <p className="p-hiws">
              How it works: <a href="/how-it-works">Learn more</a>
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

export default ItemDetails;