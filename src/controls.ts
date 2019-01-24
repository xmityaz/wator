import {Game, EvolutionParams} from './game';

const evolutionControls = document.getElementById('evolution-controls');
const starkFishNumberInput = document.getElementById('start-fish-number') as HTMLInputElement;
const starkSharkNumberInput = document.getElementById('start-shark-number') as HTMLInputElement;

const startButton = document.getElementById('start-button');

const pauseEl = document.getElementById('pause');
const stopEl = document.getElementById('stop');

function showOverlay() {
  document.getElementById('ocean-overlay').setAttribute('style', 'visibility: visible; z-index: 100;');
}

function hideOverlay() {
  document.getElementById('ocean-overlay').setAttribute('style', 'visibility: hidden; z-index: 0;');
}

function initializeEvolutionForm(game: Game, defaultParams: EvolutionParams) {
  const inputsArr = Array.from(evolutionControls.getElementsByTagName('input'));

  inputsArr.forEach(inputEl => {
    const name = inputEl.name as keyof EvolutionParams;
    inputEl.onchange = (event: Event) => {
      game.setEvolutionParams({
        [name]: (event.currentTarget as HTMLInputElement).value
      });
    };

    inputEl.value = String(defaultParams[name]);
  });
}

export function initControls(game: Game, defaultParams: EvolutionParams) {
  pauseEl.addEventListener('click', () => {
    if (game.isRunning) {
      game.pause();
      pauseEl.classList.add('paused');
    } else {
      game.play();
      pauseEl.classList.remove('paused');
    }
  });

  stopEl.addEventListener('click', () => {
    game.pause();
    showOverlay();
  });

  startButton.addEventListener('click', () => {
    const startParams = {
      startFishNumber: starkFishNumberInput.valueAsNumber,
      startSharkNumber: starkSharkNumberInput.valueAsNumber
    };

    game.reset({startParams});
    game.play();
    hideOverlay();
  });

  initializeEvolutionForm(game, defaultParams);
}
