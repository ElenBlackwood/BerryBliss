import React,  { useState } from "react";
import './item.scss'
// import likeIcon from '../../../components/assets/heart.svg'

const Item = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = () => {
        props.addToFavourite(props.item);
        setIsFavorite(!isFavorite); // Toggle the favorite state
    }
    return ( 
    <div className="item">
        <div className="item__img-holder">
            <img src={props.image} alt="" />
        </div>
        <div className="item__desc">
            <div className="item__title-holder">
                <h3 className="item__title">{props.name}</h3>       
                <span 
                    className={`item__like-icon ${isFavorite ? 'favorite' : ''}`}
                    onClick={handleAddToFavorites}
                ></span>
            </div>
            <div className="item__text">
                <div className="item__icons">
                    <span>Rate: <span>{props.rate}</span></span>
                    <span>Review: {props.review}</span>         
                </div>           
                <p><span className="item__text_color">Winery:</span> {props.winery}</p>
                <p><span className="item__text_color">Country & Region:</span> {props.location}</p> 
            </div>           
            <button onClick={props.addToCart} className="red-btn">Add</button>
        </div> 
    </div>
    );
}

export default Item;