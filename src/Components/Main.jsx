import React from 'react'; 
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Panel from '../Components/Panel'
import SideMenu from '../Components/SideMenu';
import AboutMe from '../Components/AboutMe';
import Resume from '../Components/Resume'
import Portfolio from '../Components/Portfolio'
import s from '../styles/App.module.css';


const Main = () => {
  return (
    <BrowserRouter>
      <main className={s.main}>
        <Panel/>
        <SideMenu />
        <Routes>
          <Route path="/home" element={<AboutMe />}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Main;
