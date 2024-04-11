import React from 'react';
import { Link } from 'react-router-dom';
import './_cart.scss';
import EmptyGlassImg from '../../components/assets/shopping-bag.png'

const Cart = ({ cart, removeFromCart }) => {
  const handleRemoveItem = (index) => {
  removeFromCart(index);
  };
  return (
    <section className="cart">
      <div className="container">
        {cart.length > 0 ? (
          <div>
          <h2 className="cart__title">Your shopping cart</h2>
            {cart.map((item, index) => (
              <div className="cart__items-holder" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.winery}</p>
                <p>{item.location}</p>
                <button className='red-btn' onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-cart">
            <span className="empty-cart__text">Wait a minute... Oh no!</span>            
            <p className="empty-cart__empty-text">Your cart is empty.</p>
            <img src={EmptyGlassImg} alt="empty glass image" />
            <Link to='/catalog' className="red-btn">Make your life beautiful</Link>
          </div>          
        )}
      </div>
    </section>
  );
};

export default Cart;

