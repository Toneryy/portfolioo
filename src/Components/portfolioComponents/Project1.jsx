import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from '../../styles/portfolio-modules/first.module.css'; 

import first from '../../data/first.png';
import second from '../../data/firstProject/second.png';
import third from '../../data/firstProject/third.png'; 
import fourth from '../../data/firstProject/fourth.png';
import fifth from '../../data/firstProject/fifth.png';
import sixth from '../../data/firstProject/sixth.png'; 
import seventh from '../../data/firstProject/seventh.png';
import eighth from '../../data/firstProject/eighth.png';
import nineth from '../../data/firstProject/nineth.png'; 
import tenth from '../../data/firstProject/tenth.png';
import eleventh from '../../data/firstProject/eleventh.png';

const Project1 = () => {
    const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth, eleventh]; // массив с изображениями
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                    <h1>Рок-группа ID Aho</h1>
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
                        <p>Это описание проекта рок-группы ID Aho. Здесь можно рассказать о целях, процессе и результатах проекта. Поделитесь интересными моментами и достижениями, связанными с этим проектом.</p>
                    </div>
                    <a href="https://github.com/Toneryy/first_order" className={s.githubButton} target="_blank" rel="noopener noreferrer">
                        Перейти на GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project1;
