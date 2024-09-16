import React, { useState } from "react";
import logo from '../data/logo.png';
import night from '../data/night_theme.png';
import burgerMenuImg from '../data/burgerMenu_img.png';
import s from '../styles/header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        console.log('Burger menu clicked');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <div className={s.header_line}>
                    <a href="/home" className={s.logo}>
                        <img src={logo} alt="logo"/>
                    </a>
                    <button className={s.burgerButton} onClick={toggleMenu}>
                        <img className={s.burgerMenuImg} src={burgerMenuImg} alt="burger menu" />
                    </button>
                    <button className={s.themeButton}>
                        <img className={s.buttonImage} src={night} alt="night theme" />
                    </button>
                </div>
            </header>

            {/* Меню будет показываться, если isMenuOpen === true */}
            <div className={`${s.burgerMenu} ${isMenuOpen ? s.open : ''}`}>
                <section className={s.panel}>
                    <div className={s.panelContent}>
                        <a href="/home" className={s.panelElement}>
                            <div className={s.panelContainer}>
                                <h4 className={s.panelSubtitle}>Главная</h4>
                            </div>
                        </a>
                        <a href="/Resume" className={s.panelElement}>
                            <div className={s.panelContainer}>
                                <h4 className={s.panelSubtitle}>Резюме</h4>
                            </div>
                        </a>
                        <a href="/portfolio" className={s.panelElement}>
                            <div className={s.panelContainer}>
                                <h4 className={s.panelSubtitle}>Портфолио</h4>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Header;
