import React from 'react';
import { Link } from 'react-router-dom';
import './_favourites.scss'
import FavouriteImg from '../../components/assets/heart.png'

const Favourites = ({ favourite, removeFromFavourites }) => {
  return (
    <section className="favourites">
      <div className="container">
        {favourite.length > 0 ? (
        <div>
          <h2 className="favourites__title">Your favourites wines</h2>
          {favourite.map((item, index) => (
            <div key={index} className="favourites__product">
              <div className="favourites__img">
                <img src={item.image} alt="wine image" />
              </div>
              <div className="favourites__products-desc">
                <span  className="favourites__product-name">{item.wine}</span>
                <p className="favourites__winery"> Winery: {item.winery}</p>
                <p className="favourites__location">Country & Region: {item.location}</p>
                <button className="btn" onClick={() => removeFromFavourites(index)}>Remove from favourites</button>                            
              </div>
          </div>
          ))}
        </div>
        ) : (
          <div className="nosaved">
            <h2 className="nosaved__title">Oh no! You have no favourite wines...</h2>
            <Link to='/catalog' className='nosaved__link'>
              <span className="nosaved__text">Let's make it right</span>
              <img src={FavouriteImg} alt="favourite image" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favourites;
