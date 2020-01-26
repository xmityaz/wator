import {Config} from './Ocean.types';

const gameSpeed = 50;

export const configOneFish: Config = {
  brickSize: {width: 40, height: 40},
  boardSize: {width: 60, height: 30},
  evolutionParams: {
    fishReproducingRate: Infinity,
    sharkReproducingRate: 0,
    sharkMaxEnergy: 0,
    gameSpeed: 120
  },
  startParams: {startFishNumber: 1, startSharkNumber: 0}
};

export const configManyFish: Config = {
  brickSize: {width: 20, height: 20},
  boardSize: {width: 60, height: 30},
  evolutionParams: {
    fishReproducingRate: 20,
    sharkReproducingRate: 0,
    sharkMaxEnergy: 0,
    gameSpeed: 60
  },
  startParams: {startFishNumber: 1, startSharkNumber: 0}
};

export const configDoomed: Config = {
  brickSize: {width: 8, height: 8},
  boardSize: {width: 185, height: 100},
  evolutionParams: {
    fishReproducingRate: 100,
    sharkReproducingRate: 80,
    sharkMaxEnergy: 79,
    gameSpeed
  },
  startParams: {startFishNumber: 2000, startSharkNumber: 2000}
};

export const configSandbox: Config = {
  brickSize: {width: 4, height: 4},
  boardSize: {width: 185, height: 100},
  evolutionParams: {
    fishReproducingRate: 100,
    sharkReproducingRate: 80,
    sharkMaxEnergy: 79,
    gameSpeed
  },
  startParams: {startFishNumber: 2000, startSharkNumber: 2000},
  rectMode: true
};
