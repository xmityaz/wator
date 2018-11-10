import * as PIXI from 'pixi.js';
import '../index.html';
import {Playground, BRICK_SIZE} from './playground';
import {Config, initializePetMap, processDay} from './logic';

const testConfig: Config = {
  boardSize: {width: 100, height: 100},

  fishReproducingRate: 15,
  startFishNumber: 200,

  sharkReproducingRate: 15,
  sharkMaxEnergy: 10,
  startSharkNumber: 105
};
const app = new PIXI.Application(
  testConfig.boardSize.width * BRICK_SIZE.WIDTH,
  testConfig.boardSize.height * BRICK_SIZE.HEIGHT,
  {antialias: true}
);
const rootEl = document.getElementById('root') || document.body;

rootEl.appendChild(app.view);

const playground = new Playground(testConfig);

const petMap = initializePetMap(testConfig);

app.stage.addChild(playground.container);

function step() {
  playground.drawPetMap(petMap);
  processDay(petMap, testConfig);
}

setInterval(() => requestAnimationFrame(step), 50);