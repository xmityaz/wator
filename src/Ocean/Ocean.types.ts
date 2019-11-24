type BoardSize = { width: number; height: number };

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

export type Config = {
  boardSize: BoardSize;
  evolutionParams: EvolutionParams;
  startParams: StartParams;
};
