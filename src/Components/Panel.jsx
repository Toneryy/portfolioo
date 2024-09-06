import React from "react";

import home from '../data/home.png';
import resume from '../data/resume.png';
import work from '../data/work.png';

import s from '../styles/panel.module.css';

const Panel = () => {
    return (
        <div className={s.panel}>
            <div className={s.panelContent}>
                <button className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={home} alt="home icon" width="22.5px" height="19.5px"/>
                        <h4 className={s.panelSubtitle}>Home</h4>
                    </div>
                </button>

                <button className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={resume} alt="resume icon" width="16px" height="20px"/>
                        <h4 className={s.panelSubtitle}>Resume</h4>
                    </div>
                </button>

                <button className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={work} alt="work icon" width="20px" height="19px"/>
                        <h4 className={s.panelSubtitle}>Work</h4>
                    </div>
                </button>

                {/* <button className={s.panelElement}>
                    <div className={s.panelContainer}>
                        <img src={contact} alt="contact icon" width="20px" height="20px"/>
                        <h4 className={s.panelSubtitle}>Contact</h4>
                    </div>
                </button> */}
            </div>
        </div>
    );
};

export default Panel;
