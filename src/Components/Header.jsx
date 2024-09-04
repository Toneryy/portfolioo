import React from "react";
import logo from '../data/logo.png'
import night from '../data/night_theme.png'
import '../styles/App.module.css';
import s from '../styles/header.module.css'

const Header = () => {
    return (
        <header>
            <div className={s.header_line}>
                <a href="#" className={s.logo}>
                    <img src={logo} alt="logo"/>
                </a>
                <button className={s.themeButton}><img className={s.buttonImage} src={night} alt="night theme" /></button>
            </div>
        </header>
    )
}

export default Header;