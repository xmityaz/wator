import '../index.html';
import {Playground} from './playground';
import {Config, initializePetMap, processDay} from './logic';

const testConfig: Config = {
  boardSize: {width: 120, height: 120},

  fishReproducingRate: 15,
  startFishNumber: 300,

  sharkReproducingRate: 15,
  sharkMaxEnergy: 10,
  startSharkNumber: 505
};

const playground = new Playground(testConfig);

const petMap = initializePetMap(testConfig);

function step() {
  playground.drawPetMap(petMap);
  processDay(petMap, testConfig);
}

setInterval(() => requestAnimationFrame(step), 50);