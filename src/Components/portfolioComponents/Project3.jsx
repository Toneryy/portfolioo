import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from '../../styles/portfolio-modules/third.module.css'; 

import first from '../../data/third.png';
import second from '../../data/thirdProject/2.png';
import third from '../../data/thirdProject/3.png'; 
import fourth from '../../data/thirdProject/4.png';
import fifth from '../../data/thirdProject/5.png';
import sixth from '../../data/thirdProject/6.png'; 

const Project3 = () => {
    const images = [first, second, third, fourth, fifth, sixth]; // массив с изображениями
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Автоматическая смена изображения
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Свитч фотки каждые 3 секунды

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [images.length]);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className={s.project}>
            <div className={s.projectContainer}>
                <div className={s.title}>
                    <h1>Пример магазина FOODMarket</h1>
                    <Link to="/portfolio" className={s.backButton}>
                        Назад
                    </Link>
                </div>
                <div className={s.content}>
                    <div className={s.imageContainer}>
                        <img
                            src={images[currentImageIndex]}
                            alt={`ID Aho project ${currentImageIndex + 1}`}
                            className={s.projectImage}
                        />
                        <button className={s.prevButton} onClick={handlePrevClick}>
                            {"<"}
                        </button>
                        <button className={s.nextButton} onClick={handleNextClick}>
                            {">"}
                        </button>
                    </div>
                    <div className={s.description}>
                        <p>Пример структуры веб-сайта, который я использовал в дальнейшем. Стек: scss, html&css и normalize</p>
                    </div>
                    <a href="https://github.com/Toneryy/food-shop" className={s.githubButton} target="_blank" rel="noopener noreferrer">
                        Перейти на GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project3;
