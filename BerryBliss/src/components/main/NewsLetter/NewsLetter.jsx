import React from 'react'
import './_newsletter.scss'

function NewsLetter() {
  return (
    <section className="newsletter">
      <p className="title">Get Exclusive Offers On Your Email</p>
      <div className="newsletter__subtitle">
        <p>Subscribe to our news and stay updated</p>
      </div>
      <form className="newsletter__form">
        <input className="newsletter__input" type="email" placeholder='Your Email' />
        <button className="newsletter__btn">Subscribe</button>
      </form>
    </section>
  )
}

export default NewsLetter