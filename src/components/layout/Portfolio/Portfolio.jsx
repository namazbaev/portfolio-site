import React from 'react'
import portfolio1 from 'assets/images/portfolio-1.jpg'
import portfolio2 from 'assets/images/portfolio-2.jpg'
import portfolio3 from 'assets/images/portfolio-3.jpg'
import './Portfolio.css'
const Portfolio = () => {
    return (
        <div className="container">
            <section id="portfolio" className="portfolio">
                <h5 className="section-subtitle">
                    Mening ishlarim
                    <span className="blur-line" />
                </h5>
                <h2 className="section-title">
                    Mening oxirgi <br />
                    ishlarimni ko'ring
                </h2>
                <div className="portfolio-filters">
                    <li className="active">Hammasi</li>
                    <li>Mashhurlari</li>
                    <li>Oxirgilari</li>
                </div>
                <div className="portfolio-items">
                    <div className="portfolio-item portfolio-item-1">
                        <img
                            className="portfolio-item__image"
                            src={portfolio1} alt="Portfolio 1"
                        />
                        <div className="portfolio-item__overlay" />
                        <div className="portfolio-item__info">
                            <h4>
                                <a href="#">Portfolio item 1</a>
                            </h4>
                            <p>Ishim haqida</p>
                        </div>
                    </div>
                    <div className="portfolio-item portfolio-item-2">
                        <img
                            className="portfolio-item__image"
                            src={portfolio2} alt="Portfolio 2"
                        />
                        <div className="portfolio-item__overlay" />
                        <div className="portfolio-item__info">
                            <h4>
                                <a href="#">Portfolio item 2</a>
                            </h4>
                            <p>Ishim haqida</p>
                        </div>
                    </div>
                    <div className="portfolio-item portfolio-item-3">
                        <img
                            className="portfolio-item__image"
                            src={portfolio3} alt="Portfolio 3"
                        />
                        <div className="portfolio-item__overlay" />
                        <div className="portfolio-item__info">
                            <h4>
                                <a href="#">Portfolio item 3</a>
                            </h4>
                            <p>Ishim haqida</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Portfolio
