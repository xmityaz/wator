import {Playground} from './playground';
import {PetMap, initializePetMap, processDay} from './logic';

type BoardSize = {width: number; height: number};
type EvolutionParams = {
  fishReproducingRate: number;
  sharkReproducingRate: number;
  sharkMaxEnergy: number;

  gameSpeed: number;
};
type StartParams = {
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
    this.playground.drawPetMap(this.petMap);
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

  reset = (config: Config = this.config) => {
    this.config = config;
    this.playground = new Playground(config);
    this.petMap = initializePetMap(config);
  };

  setEvolutionParams = (evolutionParams: EvolutionParams) => {
    this.config.evolutionParams = evolutionParams;

    this.pause();
    this.play();
  };

  constructor(config: Config) {
    this.reset(config);
  }
}
