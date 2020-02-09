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
  startParams: {startFishNumber: 1, startSharkNumber: 0},
  exitConditions: ['timeout']
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
  startParams: {startFishNumber: 2, startSharkNumber: 0},
  exitConditions: ['overpopulation']
};

export const configDoomed: Config = {
  brickSize: {width: 20, height: 20},
  boardSize: {width: 185, height: 100},
  evolutionParams: {
    fishReproducingRate: 80,
    sharkReproducingRate: 150,
    sharkMaxEnergy: 120,
    gameSpeed: 80
  },
  startParams: {startFishNumber: 100, startSharkNumber: 500},
  exitConditions: ['overpopulation', 'extinction']
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
