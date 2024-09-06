import React from 'react'; 
import Panel from '../Components/Panel'
import SideMenu from '../Components/SideMenu';
import AboutMe from '../Components/AboutMe';
import s from '../styles/App.module.css';

const Main = () => {
  return (
    <main className={s.main}>
      <Panel/>
      <SideMenu />
      <AboutMe />
    </main>
  );
}

export default Main;
