/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import json from 'utils/json'
import './Blog.css'
const { blogs } = json
const Blog = () => {
    return (
        <div className="container">
            <section id="blog" className="blog">
                <h5 className="section-subtitle">
                    Mening blogim
                    <span className="blur-line" />
                </h5>
                <h2 className="section-title">Oxirgi maqolalarim</h2>
                <div className="blog-items">
                    {blogs.map((item, i) => {
                        return (
                            <div key={i} className="blog-item">
                                <div className="blog-item__image">
                                    <img src={item.image} alt={`Blog ` + i} />
                                </div>
                                <div className="blog-item__info">
                                    <div className="blog-item__main-info">
                                        <span className="blog-item__author">
                                            <i className="fa fa-user" />
                                            {item.creator}
                                        </span>
                                        <span className="blog-item__date">
                                            <i className="fa fa-calendar" />
                                            {item.date}
                                        </span>
                                    </div>
                                    <h5 className="blog-item__title">{item.title}</h5>
                                    <p className="blog-item__desciption">
                                        {item.description}
                                    </p>
                                    <a className="blog-item__learn-more" href="#">
                                        Ko'proq o'qish
                                    </a>
                                </div></div>
                        )
                    })}
                </div>
            </section>
        </div>

    )
}

export default Blog
