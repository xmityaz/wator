export type Size = {width: number; height: number};

export type EvolutionParams = {
  fishReproducingRate: number;
  sharkReproducingRate: number;
  sharkMaxEnergy: number;

  gameSpeed: number;
};

export type StartParams = {
  startFishNumber: number;
  startSharkNumber: number;
};

export type ExitConditions = 'timeout' | 'overpopulation' | 'extinction';

export type Config = {
  brickSize: Size;
  boardSize: Size;
  evolutionParams: EvolutionParams;
  startParams: StartParams;
  rectMode?: boolean;
  exitConditions?: ExitConditions[];
};
