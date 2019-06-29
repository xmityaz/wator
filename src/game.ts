import {Playground} from './playground';
import {PetMap, initializePetMap, processDay} from './logic';

type BoardSize = {width: number; height: number};
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

export class Game {
  private playground: Playground;
  private config: Config;
  private petMap: PetMap;

  private gameLoop: number;

  private step = () => {
    this.playground.drawPetMap(this.petMap, this.config);
    processDay(this.petMap, this.config);
  };

  private get gameSpeed() {
    return this.config.evolutionParams.gameSpeed;
  }

  isRunning: boolean;

  pause = () => {
    this.isRunning = false;
    clearInterval(this.gameLoop);
  };

  play = () => {
    this.isRunning = true;
    this.gameLoop = setInterval(() => requestAnimationFrame(this.step), this.gameSpeed);
  };

  reset = (config: Partial<Config> = {}) => {
    this.config = {
      ...this.config,
      ...config
    };

    this.playground = new Playground(this.config);
    this.petMap = initializePetMap(this.config);
  };

  setEvolutionParams = (evolutionParams: Partial<EvolutionParams>) => {
    this.config.evolutionParams = {
      ...this.config.evolutionParams,
      ...evolutionParams
    };

    this.pause();
    this.play();
  };

  constructor(config: Config) {
    this.reset(config);
  }
}
