import React from 'react';
import s from './App.module.scss';
import {Wizard} from '../Wizard/Wizard';

const App: React.FC = () => {
  return (
    <div className={s.root}>
      <header className={s.header}>Wator</header>

      <Wizard />
    </div>
  );
};

export default App;
