import React from 'react'
import aboutMe from 'assets/images/about-me.png'
import './Clients.css'
const Clients = () => {
    return (
        <div className="container">
            <section id="clients" className="clients">
                <h5 className="section-subtitle">
                    Mening mijozlarim
                    <span className="blur-line" />
                </h5>
                <h2 className="section-title">
                    Hurmatli mijozlarim <br />
                    men haqimda
                </h2>
                <div className="client-items">
                    <div className="client-item">
                        <div className="client-item__image">
                            <img src={aboutMe} alt="Client 1" />
                        </div>
                        <div className="client-item__info">
                            <h3 className="client-item__name">Sanjar Qodirov</h3>
                            <p className="client-item__position">Senior (katta) dasturchi</p>
                            <p className="client-item__review">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                                incidunt non dicta excepturi iusto assumenda quo est quas, odit
                                laborum reprehenderit, molestias magni inventore omnis eum placeat
                                voluptatibus officia commodi? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia incidunt non dicta excepturi iusto
                                assumenda quo est quas, odit laborum reprehenderit, molestias magni
                                inventore omnis eum placeat voluptatibus officia commodi?
                            </p>
                            <div className="client-item__rate">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star disabled" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </section>
        </div>

    )
}

export default Clients
