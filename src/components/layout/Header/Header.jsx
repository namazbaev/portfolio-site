import React from 'react'
import './Header.css'
import logo from 'assets/images/logo.png';
const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="main-header__brand">
                    <a href="index.html">
                        <img width={70} src={logo} alt="logo" />
                    </a>
                </div>
                <nav className="main-navigation">
                    <ul className="main-navigation__items">
                        <li className="main-navigation__item">
                            <a href="#main-section">Asosiy</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="#about-me">Men haqimda</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="#services">Xizmatlar</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="#clients">Mijozlar</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="#blog">Blog</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="#partners">Sheriklar</a>
                        </li>
                        <li className="main-navigation__item">
                            <a href="contact.html">Bog'lanish</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header
