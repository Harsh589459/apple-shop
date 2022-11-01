import React from 'react'
import { CountContext } from '../../CountContext';
import './Navbar.css'
import men from '../../Images/men.png'
import heart from '../../Images/heart.png';
import search from '../../Images/search.png'
import cart from '../../Images/cart.png'

function Navbar() {
    const { counter } = React.useContext(CountContext)
    return (

        <div className="navbar-container">
            <div className="navbar-left">
                <div className="navbar-heading">
                    <h3>AccioJob</h3>
                </div>
                <div className="navbar-middle">
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
                    </ul>

                </div>
            </div>
            <div className="navbar-right">
                <img src={men} alt="account" className="account-symbol" />
                <p>Login / Register</p>
                <img src={search} alt="" className="search-bar" />
                <div className="cart-orders">
                    <img src={cart} alt="" />
                    <span className="cart-counter">{counter}</span>
                </div>
                <img src={heart} alt="" className="fav-symbol" />
                <span className="fav-num">1</span>
            </div>
        </div>
    )
}

export default Navbar