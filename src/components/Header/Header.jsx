import "./Header.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import logo from "../../images/logo.jpg";
import { useState, useContext, useMemo } from "react";
import Cart from "../../sections/Cart/Cart"; 
import { CartContext } from "../CartContext"; 

const Header = () => {
  const [placeholder, setPlaceholder] = useState('Search');
  const [cartVisible, setCartVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext); 

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuIcon = useMemo(() => {
    return menuOpen ? <IoMdClose /> : <CgMenuGridR />;
  }, [menuOpen]);

  return (
    <div className="header-wrapper">
      <div className="header-top">
        <div className="search">
          <CiSearch className="search-icon" />
          <input
            type="search"
            placeholder={placeholder}
            onFocus={() => setPlaceholder('Type to search')}
            onBlur={() => setPlaceholder('Search')}
          />
        </div>

        <button onClick={toggleMenu} className="menu-button">
          {menuIcon}
        </button>

        <Link to="/">
          <img src={logo} alt="Jamie Beck Logo" className="logo" />
        </Link>

        <div className="header-top-right">
          <Link to="/login" className='login'>
            <GoPerson />
          </Link>
          <button onClick={toggleCartVisibility} className="cart-button">
            <CiShoppingCart />
            {cartItems.length > 0 && (
              <div className="cart-count">{cartItems.length}</div>
            )}
          </button>
        </div>
      </div>

      <div className={`header-bottom ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>LIFESTYLE</Link>
          </li>
          <li>
            <Link to="/phonecases" onClick={toggleMenu}>PHONE CASES</Link>
          </li>
          <li>
            <Link to="/posters" onClick={toggleMenu}>POSTERS</Link>
          </li>
          <li>
            <Link to="/fineart" onClick={toggleMenu}>FINE ART</Link>
          </li>
          <li>
            <Link to="/giftcards" onClick={toggleMenu}>GIFT CARDS</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
          </li>
        </ul>
      </div>

      {cartVisible && <Cart toggleCartVisibility={toggleCartVisibility} />} 
    </div>
  );
};

export default Header;
