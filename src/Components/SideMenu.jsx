import React from "react";

import s from '../styles/sidemenu.module.css'

import faceImage from "../data/faceImage.jpg"

import telegram from "../data/telegram.png"
import vk from "../data/vk.png"
import github from "../data/github.png"
import email from "../data/email.png"

import phoneIcon from "../data/phoneIcon.png"
import emailIcon from "../data/emailIcon.png"
import locationIcon from "../data/locationIcon.png"
import downloadIcon from "../data/downloadIcon.png"

import resume from '../data/resume/resume.pdf'

const SideMenu = () => {
    return (
        <section className={s.sidemenu}>
            <img src={faceImage} alt="face" className={s.faceImage} />
            <div className={s.sidemenuContainer}>
                <h2 className={s.sidemenuTitle}>
                    Мещеряков Даниил
                </h2>
                <h3 className={s.sidemenuSubtitle}>
                    Frontend разработчик
                </h3>
                <div className={s.contactContainer}>
                    <a href="https://t.me/tonnrryyy" target="_blank" className={s.contactElement}>
                        <img src={telegram} alt="telegram"/>
                    </a>
                    <a href="https://vk.com/toneryy" target="_blank" className={s.contactElement}>
                        <img src={vk} alt="vk"/>
                    </a>
                    <a href="https://github.com/Toneryy/" target="_blank" className={s.contactElement}>
                        <img src={github} alt="github"/>
                    </a>
                    <a href="mailto:toneryy@yandex.ru" target="_blank" className={s.contactElement}>
                        <img src={email} alt="email"/>
                    </a>
                </div>
                <div className={s.informationContent}>
                    <a href="tel:+79952371047" className={s.contactItem}>
                        <img src={phoneIcon} alt="Phone Icon" className={s.contactIcon}/>
                        <div className={s.contactInfo}>
                            <h4>Телефон</h4>
                            <p>+79952371047</p>
                        </div>
                    </a>
                    <div className={s.separator}></div>
                    <a href="mailto:toneryy@ya.ru" className={s.contactItem}>
                        <img src={emailIcon} alt="Email Icon" className={s.contactIcon}/>
                        <div className={s.contactInfo}>
                            <h4>Email</h4>
                            <p>toneryy@ya.ru</p>
                        </div>
                    </a>
                    <div className={s.separator}></div>
                    <a href="https://www.google.com/maps/place/Санкт-Петербург/" target="_blank" className={s.contactItem}>
                        <img src={locationIcon} alt="Location Icon" className={s.contactIcon}/>
                        <div className={s.contactInfo}>
                            <h4>Локация</h4>
                            <p>Санкт-Петербург</p>
                        </div>
                    </a>
                    <div className={s.separator}></div>
                    <a href={resume} download className={s.downloadResume}>
                        <img src={downloadIcon} alt="Download Icon"/>
                        Скачать резюме
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SideMenu;