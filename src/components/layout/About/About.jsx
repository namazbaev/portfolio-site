import React from 'react'
import aboutMe from 'assets/images/about-me.png'
import './About.css'
const About = () => {
    return (
        <div className="container">
            <section id="about-me" className="about-me">
                <div className="about-me__image">
                    <img src={aboutMe} alt="about me photo" />
                </div>
                <div className="about-me__info">
                    <h5 className="section-subtitle">
                        Men haqimda
                        <span className="blur-line"></span>
                    </h5>
                    <h3 className="section-title">O'rta darajadagi dasturchi</h3>
                    <p className="section-me__description">
                        Mening ismim Jahongir va men 24 yoshdaman. 1 yildan ortiq vaqt mobaynida
                        dasturchi sifatida faoliyat yuritib kelaman. Hozirda xususiy sektorda
                        React va Javascript dasturchisi sifatida ishlab kelmoqdaman.
                    </p>
                    <button type="button" className="button to-uppercase about-me__action">
                        CV ko'chirib olish
                    </button>
                </div>
            </section>
            <div className="clearfix" />
        </div>

    )
}

export default About
