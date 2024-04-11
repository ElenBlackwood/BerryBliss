import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from './item/Item.jsx';
import './catalog.scss';

function Catalog( { addToCart, addToFavourite } ) {
  const [wines, setWines] = useState([]);
  const [visibleItems, setVisibleItems] = useState(9); 
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/wines/reds');
        const data = await response.json();
        setWines(data);
      } catch (error) {
        console.error('Error fetching wines:', error);
      }
    };

    fetchWines();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };  

  const handleAddToFavourite = (item) => {
    addToFavourite(item);
  };

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
    if (visibleItems >= wines.length) {
      setAllItemsLoaded(true);
    }
  };

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="title">Catalog</h2>
        <div className="catalog__card">
          <div className="card">
            {wines.slice(1, visibleItems).map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.wine}
                winery={item.winery}
                location={item.location}
                image={item.image}
                rate={item.rating.average}
                review={item.rating.reviews}
                addToCart = {() => handleAddToCart(item)}
                addToFavourite={() => handleAddToFavourite(item)}
              />
            ))}
          </div>
        </div>
        {!allItemsLoaded && (
          <div className="catalog__btn-holder">
            <button className="red-btn" onClick={loadMoreItems}>Show more</button>            
            <Link to='/cart' className=" red-btn red-btn_link" >go to cart</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;
