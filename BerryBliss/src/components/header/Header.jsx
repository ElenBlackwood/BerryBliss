import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import './_header.scss'
import cartIcon from '../assets/shopping-cart.svg'
import likeIcon from '../assets/heart.svg'
import userIcon from '../assets/user-login.svg'

const Header = ({ cartCount }) => { 
    const [menu, setMenu] = useState("catalog");    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }   

    useEffect(() => {
        // Add or remove 'overflow-hidden' class on body based on isOpen state
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (  
        <header className="header">
            <div  className={`container flex-container ${isOpen ? `is-open-container` : ""}`}>
                <div className="logo header_logo">
                    <Link to='./'>BERRYBLISS</Link>
                </div>
                <nav className="nav">
                    <ul className={`nav__menu ${isOpen ? `is-open` : ""}`}>
                        <li onClick={() => {setMenu("catalog")}}><Link to='./catalog'>Catalog</Link>{menu === "catalog" ? <hr/> : <></>}</li>
                        <li onClick={() => {setMenu("about")}}><Link to='./about'>About</Link> {menu === "about" ? <hr/> : <></>}</li>
                        <li onClick={() => {setMenu("blog")}}><Link to='./blog'>Blog</Link> {menu === "blog" ? <hr/> : <></>}</li>
                        <li onClick={() => {setMenu("location")}}><Link to='./location'>Where to buy</Link>{menu === "location"?<hr/> : <></>}</li>
                        <li><Link to="./cart"><img src={cartIcon} alt="Cart" /></Link></li>
                        <div className={`nav__cart-count ${isOpen ? `nav__is-open-cart` : ""}`}>{cartCount}</div>
                        <li><Link to="./favourites"><img src={likeIcon} alt="favourites" /></Link></li>
                        <li><Link to="./login"><img src={userIcon} alt="login" /></Link></li>
                    </ul>
                    <button className="burger" onClick={toggleMenu}>
                    <span className="burger__line"></span>
                    </button>
                </nav>                
            </div>
        </header>
    );
}
 
export default Header;