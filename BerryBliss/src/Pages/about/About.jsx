import React from 'react'
import { Link } from 'react-router-dom'
import './about.scss'

import undergroundImg from '../../components/assets/underground.jpg'
import ownersImg from '../../components/assets/red-bottle.jpg'
import grapes from '../../components/assets/grapes.jpg'


function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__desc">
          <div className="about__text-holder">
            <h3 className="about__title">A LITTLE ABOUT OUR COMPANY</h3>
            <div className="about__text">
              <p>We are a team of true wine connoisseurs who value and respect the traditions of producing elite drinks. Our goal is to share with you the best discoveries of the world of winemaking and help you find a unique and refined taste in your glasses. Trust our experience and expertise, and enjoy every sip with us.</p>
            </div>            
            <img src={undergroundImg} alt="undergraound photo" />
          </div>
          <div className="about__img-holder">
            <img src={ownersImg} alt="About us" />
          </div>
        </div>
        <div className="about__desc about__desc_rev">
          <div className="about__text-holder">
            <h3 className="about__title">GRAPE VARIETIES</h3>
            <div className="about__text">
              <p>Our winery is dedicated to creating wines of exquisite quality that reflect the finest characteristics of the grape. We carefully select grape varieties for our wines, ensuring their quality, taste, and uniqueness.</p>
              <p>Each class of wine we create is based on specific grape varieties that contribute their distinct aromas and flavor nuances. Our vineyards are located in ecologically clean regions where the climate and soil create ideal conditions for the growth of healthy and flavorful grapes.</p>
              <p>We work with various grape varieties, including well-known local varieties and exotic types, to provide a wide range of taste sensations in our wines. Our vineyard plots are cultivated with great attention to detail and using modern agricultural technologies to ensure the best growing conditions for the grapes.</p>
              <p>We take pride in the fact that every drop of our wines embodies the uniqueness and purity of the grape we use. Please explore our range to discover the true taste of our grapes and the wines we make from them.</p>
            </div>
              <Link className="red-btn" to='/catalog'>Explore</Link>                   
          </div>
          <div className="about__img-holder">
            <img src={grapes} alt="About us" />
          </div>
        </div>    
      </div>
    </section>
  )
}

export default About