import React from 'react'
import { Link } from 'react-router-dom'
import './_footer.scss'
import instIcon from '../../components/assets/icons/instagram.svg'
import twittIcon from '../../components/assets/icons/twitter.svg'
import fcbkIcon from '../../components/assets/icons/facebook.svg'
import pintIcon from '../../components/assets/icons/pinterest.svg'


export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="logo">
                <Link to='./'>BERRYBLISS</Link>
            </div>
            <div className="footer__social-icons">
                <div className="footer__icons-holder">
                    <Link to='https://www.instagram.com/'>
                        <img src={instIcon} alt="instagram icon" />         
                    </Link>
                </div>
                <div className="footer__icons-holder">
                    <Link to='https://twitter.com/'>
                        <img src={twittIcon} alt="twitter icon" />            
                    </Link>
                </div>
                <div className="footer__icons-holder">
                    <Link to='https://www.facebook.com/'>
                        <img src={fcbkIcon} alt="facebook icon" />           
                    </Link>
                </div>
                <div className="footer__icons-holder">
                    <Link to='https://www.pinterest.com/'>
                        <img src={pintIcon} alt="pinterest icon" />         
                    </Link>
                </div>
            </div>
            <div className="footer__copyright">
                <span className="footer__line"></span>
                <p>Copyright @2024 - All right reserved</p>
            </div>
        </div>
    </footer>
  )
}
