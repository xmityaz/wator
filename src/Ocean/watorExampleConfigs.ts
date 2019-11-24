import {Config} from './Ocean.types';

const gameSpeed = 50;
const boardSize = {width: 150, height: 150};

export const configOneFish: Config = {
  boardSize,
  evolutionParams: {
    fishReproducingRate: Infinity,
    sharkReproducingRate: 0,
    sharkMaxEnergy: 0,
    gameSpeed
  },
  startParams: {startFishNumber: 1, startSharkNumber: 0}
};

export const configManyFish: Config = {
  boardSize,
  evolutionParams: {
    fishReproducingRate: 20,
    sharkReproducingRate: 0,
    sharkMaxEnergy: 0,
    gameSpeed
  },
  startParams: {startFishNumber: 1, startSharkNumber: 0}
};

export const configDoomed: Config = {
  boardSize,
  evolutionParams: {
    fishReproducingRate: 100,
    sharkReproducingRate: 80,
    sharkMaxEnergy: 79,
    gameSpeed
  },
  startParams: {startFishNumber: 2000, startSharkNumber: 2000}
};
