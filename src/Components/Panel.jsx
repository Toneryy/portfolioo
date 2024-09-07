import React from "react";

import home from '../data/home.png';
import resume from '../data/resume.png';
import work from '../data/work.png';

import s from '../styles/panel.module.css';

const Panel = () => {
    return (
        <section className={s.panel}>
            <div className={s.panelContent}>
                <a href="/home" className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={home} alt="home icon" width="22.5px" height="19.5px"/>
                        <h4 className={s.panelSubtitle}>Главная</h4>
                    </div>
                </a>

                <a href="/Resume" className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={resume} alt="resume icon" width="16px" height="20px"/>
                        <h4 className={s.panelSubtitle}>Резюме</h4>
                    </div>
                </a>

                <a href="/portfolio" className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={work} alt="work icon" width="20px" height="19px"/>
                        <h4 className={s.panelSubtitle}>Портфолио</h4>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Panel;
