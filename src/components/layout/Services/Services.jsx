/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import json from 'utils/json'
import './Services.css'
const { services } = json

const Services = () => {
    return (
        <div className="container">
            <section id="services" className="services">
                <h5 className="section-subtitle">
                    Mening xizmatlarim
                    <span className="blur-line" />
                </h5>
                <h2 className="section-title">
                    Men taklif <br />
                    qiladigan xizmatlar
                </h2>
                <div className="services__cards">
                    {services.map((iterate, i) => {
                        return (
                            <div key={i} className="service-card">
                                <img
                                    className="service-card__icon"
                                    src={iterate.image} alt={'Service ' + i}
                                />
                                <h5 className="service-card__title">{iterate.title}</h5>
                                <p className="service-card__description">{iterate.description}</p>
                                <a href="#" className="service-card__link">
                                    Ko'proq
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>

    )
}

export default Services
