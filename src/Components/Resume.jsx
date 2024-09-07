import React from "react";
import s from '../styles/resume.module.css';

import education from '../data/resume/eduIcon.png'
import work from '../data/resume/workIcon.png'

const Resume = () => {
    return (
        <section className={s.resume}>
            <div className={s.resumeContainer}>
                <div className={s.title}>
                    <h1>Резюме</h1>
                    <div className={s.line}></div>
                </div>
                
                <div className={s.resumeSections}>
                    {/* Education Section */}
                    <div className={s.section}>
                        <h2 className={s.sectionTitle}>
                            <span className={s.icon}><img src={education} alt="education icon" /></span>
                            Образование
                        </h2>
                        <div className={s.sectionContent}>
                            <div className={s.item}>
                                <p className={s.date}>2023-2027</p>
                                <h3 className={s.itemTitle}>Моб. и сет. технологии</h3>
                                <p className={s.institution}>Университет ИТМО</p>
                            </div>
                            <div className={s.item}>
                                <p className={s.date}>2023-2024</p>
                                <h3 className={s.itemTitle}>Frontend разработчик</h3>
                                <p className={s.institution}>Skillbox</p>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={s.section}>
                        <h2 className={s.sectionTitle}>
                            <span className={s.icon}><img src={work} alt="work icon" /></span>
                            Опыт
                        </h2>
                        <div className={s.sectionContent}>
                            <div className={s.item}>
                                <p className={s.date}>2023 - Настоящее время</p>
                                <h3 className={s.itemTitle}>Frontend разработчик</h3>
                                <p className={s.institution}>Служба Добрых Дел</p>
                            </div>
                            <div className={s.item}>
                                <p className={s.date}>2022-Настоящее время</p>
                                <h3 className={s.itemTitle}>Frontend разработчик</h3>
                                <p className={s.institution}>Фриланс</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.skillsSection}>
                    {/* Work Skills */}
                    <div className={s.skills}>
                        <h2 className={s.skillsTitle}>Стек</h2>
                        <div className={s.skillsGrid}>
                            <span className={s.skillItem}>React.js</span>
                            <span className={s.skillItem}>Redux</span>
                            <span className={s.skillItem}>HTML 5</span>
                            <span className={s.skillItem}>CSS 3</span>
                            <span className={s.skillItem}>SCSS</span>
                            <span className={s.skillItem}>Figma</span>
                            <span className={s.skillItem}>JavaScript</span>
                            <span className={s.skillItem}>Typescript</span>
                            <span className={s.skillItem}>SQL</span>
                            <span className={s.skillItem}>Git</span>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className={s.skills}>
                        <h2 className={s.skillsTitle}>Навыки</h2>
                        <div className={s.skillsGrid}>
                            <span className={s.skillItem}>Time Management</span>
                            <span className={s.skillItem}>Mentorship</span>
                            <span className={s.skillItem}>Impeccable Communication</span>
                            <span className={s.skillItem}>Flexibility</span>
                            <span className={s.skillItem}>Research</span>
                            <span className={s.skillItem}>Writing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
