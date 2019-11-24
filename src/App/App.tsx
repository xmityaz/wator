import React from 'react';
import s from './App.module.scss';
import {Ocean} from '../Ocean/Ocean';
import {Config, EvolutionParams} from '../Ocean/Ocean.types';

const defaultEvolutionParams: EvolutionParams = {
  fishReproducingRate: 15,
  sharkReproducingRate: 15,
  sharkMaxEnergy: 5,
  gameSpeed: 50
};

let testConfig: Config = {
  boardSize: {width: 150, height: 150},

  evolutionParams: defaultEvolutionParams,

  startParams: {
    startFishNumber: 2000,
    startSharkNumber: 1000
  }
};

const App: React.FC = () => {
  return (
    <div className={s.root}>
      <header className={s.header}>Wator</header>

      <div>
        It all started in 1984 when one god-like creature who lived in our neighbor galaxy. He just returned
        home after visiting Earth. And he was depressed. His own galaxy was beautiful- it had stunning
        nebulas, one of the biggest and shiniest quasars in the universe and neutron stars spinning million
        times per second. But there was no life in it like there was on Earth. Now he saw it clearly. All he
        wanted now was to create life. He started by creating a planet. He knew all life on Earth began in the
        water so he filled his planet with a crystal blue ocean that covered every bit of the land. And then
        he created Dave, a fish. He also filled his ocean with endless plankton so that Dave never dies from
        hunger.
      </div>

      <Ocean withControls={false} initialConfig={testConfig} />

      <div>
        For a brief moment he was happy. But suddenly he understood that Dave lacks something very important
        for life. The purpose. He looked at Earth and right away he knew what he should do. He gave Dave an
        ability to give birth.
      </div>

      <Ocean withControls={false} initialConfig={testConfig} />

      <div>
        Oh no, Dave went out of control and kept reproducing until the ocean became overcrowded. He wanted
        Dave to be happy but instead he condemned him and all his family to miserable existence in this
        uninhabitable world. He had to fix this. And he decided that life will balance life. He created Ed, a
        shark. Ed will not eat plankton like Dave, he will eat Dave. Its a necessary evil but he knew he
        should be careful not to make old mistakes. He had to let Ed breed. But he had to also let him die.
        This way it was just.
      </div>

      <Ocean withControls={false} initialConfig={testConfig} />

      <div>
        Something was not quite right. This world was dead again. Sharks ate all the fish and died of hunger.
        He thought that he could fix it by making Ed breed slowly.{' '}
      </div>

      <Ocean withControls={true} initialConfig={testConfig} />
    </div>
  );
};

export default App;
