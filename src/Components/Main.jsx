import React from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Panel from '../Components/Panel';
import SideMenu from '../Components/SideMenu';
import AboutMe from '../Components/AboutMe';
import Resume from '../Components/Resume';
import Portfolio from '../Components/Portfolio';

import Project1 from '../Components/portfolioComponents/Project1';
import Project2 from '../Components/portfolioComponents/Project2';
import Project3 from '../Components/portfolioComponents/Project3';
import Project4 from '../Components/portfolioComponents/Project4';

import s from '../styles/App.module.css';

const Main = () => {
  return (
    <BrowserRouter>
      <main className={s.main}>
        <Panel />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/1" element={<Project1 />} />
          <Route path="/2" element={<Project2 />} />
          <Route path="/3" element={<Project3 />} />
          <Route path="/4" element={<Project4 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Main;
