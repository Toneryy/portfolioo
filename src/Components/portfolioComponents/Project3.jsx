import React from "react";
import { Link } from "react-router-dom";
import s from '../../styles/portfolio-modules/third.module.css'; 

import third from '../../data/third.jpg'

const Project1 = () => {
    return (
        <section className={s.project}>
            <div className={s.container}>
                <h1>Smart Bank App</h1>
                <img src={third} alt="Smart Bank App"/>
                <p>
                    Здесь вы можете подробно рассказать о проекте, его особенностях, технологиях и процессе разработки.
                </p>
                <Link to="/portfolio" className={s.backLink}>Вернуться к портфолио</Link>
            </div>
        </section>
    );
}

export default Project1;
