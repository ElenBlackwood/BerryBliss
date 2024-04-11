import React from 'react'
import './_trending.scss'

import imgBottleBlack from '../../assets/bottle.jpg'
import imgBottleRed from '../../assets/wine-bottle.jpg'
import { Link } from 'react-router-dom'

function Trending() {
  return (
    <section className="trending">
        <div className="container">
            <h2 className="title">new treasures</h2>
            <div className="trending__blocks-holder">
                <div className="trending__block">
                    <p className="trending__promo-text">Exclusive wines from the best producers</p>
                    <div>
                        <div className="trending__img-holder">
                            <img src={imgBottleBlack} alt="wine bottle image" />
                        </div>
                        <div className="trending__desc-box">
                            <p>Experience the seductive charm of our Merlot, a captivating red wine that delights the senses with its vibrant ruby hue and enticing aromas of ripe red berries, plums, and a hint of spice. </p>
                            <p>On the palate, velvety smoothness envelops the taste buds, unveiling layers of cherry, raspberry, and subtle earthy notes, balanced by soft, supple tannins. With its elegant complexity and lingering finish, our Merlot is a timeless classic, perfect for intimate gatherings or moments of quiet reflection.</p>
                        </div>                      
                    </div>
                </div>
                <div className="block">                    
                    <div className="trending__img-holder">
                        <img src={imgBottleRed} alt="wine bottle image" />
                    </div>
                    <div className="trending__desc-box trending__desc-box_flex">
                        <p>Indulge in the allure of our Pinot Noir, a velvety red wine boasting flavors of ripe strawberries, cherries, and a hint of spice. With its silky-smooth texture and elegant finish, this Pinot Noir is the epitome of refinement, perfect for any occasion.</p>
                        <Link className="red-btn red-btn_big" to='./catalog'>
                        to catalog
                        </Link>
                    </div>                    
                </div>           
            </div>
        </div>
    </section>
  )
}

export default Trending