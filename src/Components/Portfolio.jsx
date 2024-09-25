import React from "react";
import { NavLink } from "react-router-dom";
import s from '../styles/portfolio.module.css';

import first from '../data/first.png';
import second from '../data/second.jpg';
import third from '../data/third.png';
import fourth from '../data/fourth.png';

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
                            <img src={first} alt="Smart Bank App"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Сайт рок-группы</h3>
                            <p>Лэндинг</p>
                        </div>
                    </NavLink>
                    
                    <NavLink to="/2" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={second} alt="Online Store"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Сайт телеграм-бота</h3>
                            <p>Многостраничный сайт</p>
                        </div>
                    </NavLink>

                    <NavLink to="/3" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={third} alt="Adventure Game"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Сайт ресторана</h3>
                            <p>Лэндинг</p>
                        </div>
                    </NavLink>
                    
                    <NavLink to="/4" className={s.gridItem}>
                        <div className={s.imageContainer}>
                            <img src={fourth} alt="Predictive Analytics"/>
                        </div>
                        <div className={s.itemContent}>
                            <h3>Сайт по продаже телефонов</h3>
                            <p>Веб-приложение</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
