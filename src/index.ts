import '../index.html';
import {Config, Game} from './game';

const testConfig: Config = {
  boardSize: {width: 150, height: 150},

  evolutionParams: {
    fishReproducingRate: 15,
    sharkReproducingRate: 15,
    sharkMaxEnergy: 10,
    gameSpeed: 50
  },

  startParams: {
    startFishNumber: 1000,
    startSharkNumber: 1000
  }
};

const game = new Game(testConfig);
game.play();

// Work with DOM controls

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', () => {
  game.isRunning ? game.pause() : game.play();
});

resetButton.addEventListener('click', () => {
  game.reset();
})
