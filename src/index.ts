import '../index.html';
import '../styles.css';
import {Config, Game, EvolutionParams} from './game';
import {initControls} from './controls';

export const defaultEvolutionParams: EvolutionParams = {
  fishReproducingRate: 15,
  sharkReproducingRate: 15,
  sharkMaxEnergy: 5,
  gameSpeed: 50
};

let testConfig: Config = {
  boardSize: {width: 150, height: 150},

  evolutionParams: defaultEvolutionParams,

  startParams: {
    startFishNumber: 1000,
    startSharkNumber: 1000
  }
};

const game = new Game(testConfig);

initControls(game, defaultEvolutionParams);
