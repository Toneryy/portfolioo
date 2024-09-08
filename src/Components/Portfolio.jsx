import React from "react";
import { NavLink } from "react-router-dom";
import s from '../styles/portfolio.module.css';

import first from '../data/first.png';
import second from '../data/second.jpg';
import third from '../data/third.jpg';
import fourth from '../data/fourth.jpg';

const Portfolio = () => {
    return (
        <section className={s.portfolio}>
            <div className={s.portfolioContainer}>
                <div className={s.title}>
                    <h1>Портфолио</h1>
                    <div className={s.line}></div>
                </div>
                <div className={s.container}>
                    <NavLink to="/1" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={first} alt="first example"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>App Development</h3>
                            <p>Smart Bank App</p>
                        </div>
                    </NavLink>
                    
                    <NavLink to="/2" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={second} alt="second example"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Web Development</h3>
                            <p>Online Store</p>
                        </div>
                    </NavLink>

                    <NavLink to="/3" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={third} alt="third example"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Game Development</h3>
                            <p>Adventure Game</p>
                        </div>
                    </NavLink>
                    
                    <NavLink to="/4" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={fourth} alt="fourth example"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Data Science</h3>
                            <p>Predictive Analytics</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
