import React from 'react'
import './_main.scss'
import Hero from './hero/Hero'
import Promo from './Promo/Promo'
import NewsLetter from './NewsLetter/NewsLetter'
import Video from '../header/Video.jsx'
import Article from '../../Pages/blog/Article.jsx'
import Trending from './Trending/Trending.jsx'
import imgAccessory from '../../components/assets/cork-in-glass.jpg'

function Main() {  
  return (
    <main className="main">
        <Video />
        <Hero/>
        <Trending />
        <Promo />
        <section className="article-section">
          <div className="container">
            <h3 className="arcticle-section__title">Explore our blog</h3>
            <Article img={imgAccessory} text= {`Wine, with its rich history and diverse flavors, has long been a staple of social gatherings, romantic dinners, and moments of relaxation. However, to truly appreciate the nuances of this beloved beverage, one must delve into the world of wine accessories. These tools are designed not only to enhance the tasting experience but also to ensure that every bottle is enjoyed to its fullest potential.`}  showButton={true}
          />
          </div>
          <div className="bg-img"></div>
        </section>      
        <NewsLetter />
    </main>
  )
}

export default Main