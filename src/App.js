import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';

import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import Cart from './sections/Cart/Cart';
import Login from './sections/Login/Login';
import Contact from './sections/Contact/Contact';
import FineArt from './sections/FineArt/FineArt';
import GiftCards from './sections/GiftCards/GiftCards';
import PhoneCases from './sections/PhoneCases/PhoneCases';
import Posters from './sections/Posters/Posters';
import Footer from './components/Footer/Footer';
import ItemDetails from './components/ItemDetails/ItemDetails';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/item/:id/:category" element={<ItemDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/fineart' element={<FineArt />} />
          <Route path='/giftcards' element={<GiftCards />} />
          <Route path='/phonecases' element={<PhoneCases />} />
          <Route path='/posters' element={<Posters />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
