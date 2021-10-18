import React from 'react'
import partner1 from 'assets/images/partner-1.png'
import partner2 from 'assets/images/partner-2.png'
import partner3 from 'assets/images/partner-3.png'
import partner4 from 'assets/images/partner-4.png'
import partner5 from 'assets/images/partner-5.png'
import './Partners.css'
const Partners = () => {
    return (
        <div className="container">
            <section id="partners" className="partners">
                <div className="partner">
                    <img src={partner1} alt="Parner 1" />
                </div>
                <div className="partner">
                    <img src={partner2} alt="Parner 2" />
                </div>
                <div className="partner">
                    <img src={partner3} alt="Parner 3" />
                </div>
                <div className="partner">
                    <img src={partner4} alt="Parner 4" />
                </div>
                <div className="partner">
                    <img src={partner5} alt="Parner 5" />
                </div>
            </section>
        </div>

    )
}

export default Partners
