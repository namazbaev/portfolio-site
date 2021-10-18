import React from 'react'
import logoWhite from 'assets/images/logo-white.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__brand">
                    <img width={128} src={logoWhite} alt="Logo" />
                </div>
                <nav className="footer__navigation">
                    <ul className="footer__navigation__items">
                        <li className="footer__navigation__item">
                            <a href="#">Asosiy</a>
                        </li>
                        <li className="footer__navigation__item">
                            <a href="#">Men haqimda</a>
                        </li>
                        <li className="footer__navigation__item">
                            <a href="#">Xizmatlar</a>
                        </li>
                        <li className="footer__navigation__item">
                            <a href="#">Mijozlar</a>
                        </li>
                        <li className="footer__navigation__item">
                            <a href="#">Portfolio</a>
                        </li>
                        <li className="footer__navigation__item">
                            <a href="#">Blog</a>
                        </li>
                        <li className="footer__navigation__item">
                            <a href="#">Sheriklar</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__socials">
                    <ul>
                        <li className="footer__social">
                            <a target="_blank" href="https://t.me/shakxzod_namazbaev">
                                <i className="fab fa-telegram" />
                            </a>
                        </li>
                        <li className="footer__social">
                            <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UC3th4zg3WD5QHIJtL2WKHcA"
                            >
                                <i className="fab fa-youtube" />
                            </a>
                        </li>
                        <li className="footer__social">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/shakxzod__namazbaev"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li className="footer__social">
                            <a target="_blank" href="https://www.facebook.com/shakxzod.namazbaev">
                                <i className="fab fa-facebook" />
                            </a>
                        </li>
                    </ul>
                    <p className="footer__text">
                        Copyright ©2021 All rights reserved | This template is made with by
                        Colorlib
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
