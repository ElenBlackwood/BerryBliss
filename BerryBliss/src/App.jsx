import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { Footer } from "./components/Footer/Footer.jsx";

import Catalog from "./Pages/catalog/Catalog.jsx";
import About from './Pages/about/About.jsx'
import Blog from './Pages//blog/Blog.jsx'
import Location from './Pages/location/Location.jsx'

import Cart from './Pages/cart/Cart.jsx'
import Favourites from './Pages/favourites/Favourites.jsx'
import Login from './Pages/login/Login.jsx'


export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]); 
  const [favourite, setFavourites] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setCartCount((prevCount) => prevCount + 1);
  };
  const addToFavourite = (item) => {
    setFavourites((prevLiked) => [...prevLiked, item]);
  }
  const removeFromFavourites = (index) => {
    const updatedLiked = [...favourite.slice(0, index), ...favourite.slice(index + 1)];
    setFavourites(updatedLiked);
  }
  const removeFromCart = (index) => {
    const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(updatedCart);
    setCartCount((prevCount) => prevCount -1);
  };

  return (
      <BrowserRouter>
        <Header cartCount={cartCount}  />
        <Routes>
          <Route path='/' element= {<Main />} /> 
          <Route path="/catalog" element={<Catalog addToCart={addToCart} addToFavourite={addToFavourite} cartCount={cartCount} />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/location' element={<Location />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/favourites' element={<Favourites favourite={favourite} removeFromFavourites={removeFromFavourites}  />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}
