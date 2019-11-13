import React from 'react';
import s from './App.module.scss';
import {Ocean} from '../Ocean/Ocean';

const App: React.FC = () => {
  return (
    <div className={s.root}>
      <header className={s.header}>Wator</header>

      <Ocean />
    </div>
  );
};

export default App;
