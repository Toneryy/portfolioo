import React from 'react'; 
import s from './styles/App.module.css';
import Main from './Components/Main'
import Header from './Components/Header'

function App() {
  return (
    <div className={s.wrapper}>
      <Header/>
      <Main />
    </div>
  );
}

export default App;
