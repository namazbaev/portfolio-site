import React from 'react'
import me from 'assets/images/me.png'
import './Main.css'
const Main = () => {
    return (
        <div className="main-banner">
            <div className="container">
                <section id="main-section" className="main-section">
                    <div className="main-section__info">
                        <h4 className="main-section__welcome to-uppercase">Hammaga salom!</h4>
                        <h1 className="main-section__introduction to-uppercase">
                            I am Namazbaev
                        </h1>
                        <h3 className="main-section__position to-uppercase">
                            Middle React developer
                        </h3>
                        <div className="main-section__social_networks">
                            <a target="_blank" href="https://t.me/shakxzod_namazbaev">
                                <i className="fab fa-telegram" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UC3th4zg3WD5QHIJtL2WKHcA"
                            >
                                <i className="fab fa-youtube" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/shakxzod__namazbaev"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/shakxzod.namazbaev">
                                <i className="fab fa-facebook" />
                            </a>
                        </div>
                        <button type="button"
                            className="button main-section__action to-uppercase">
                            Ishlarimni ko'ring
                        </button>
                    </div>
                    <div className="main-section__image">
                        <img src={me} alt="photo" />
                    </div>
                </section>
                <div className="clearfix" />
            </div>
        </div>

    )
}

export default Main
