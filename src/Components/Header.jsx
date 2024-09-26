import React, { useState } from "react";
import logo from '../data/logo.png';
import homeLight from '../data/home_light.png';
import night from '../data/night_theme.png';
import burgerMenuImg from '../data/burgerMenu_img.png';
import { useTheme } from './hooks/use-theme';
import s from '../styles/header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <header>
                <div className={s.header_line}>
                    <a href="/home" className={s.logo}>
                        <img src={logo} alt="logo" />
                    </a>
                    <button className={s.burgerButton} onClick={toggleMenu}>
                        <img className={s.burgerMenuImg} src={burgerMenuImg} alt="burger menu" />
                    </button>
                    <button className={s.themeButton} onClick={toggleTheme}>
                        <img className={s.buttonImage} src={theme === 'light' ? homeLight : night} alt="theme button" />
                    </button>
                </div>
            </header>

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
};

export default Header;
