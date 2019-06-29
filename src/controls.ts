import * as $ from 'jquery';
import {Game, EvolutionParams} from './game';

const initialControls = $('#initial-controls');
const evolutionControls = $('#evolution-controls');
const starkFishNumberInput = $('#start-fish-number');
const starkSharkNumberInput = $('#start-shark-number');

const startButton = $('#start-button');

const pauseEl = $('#pause');
const stopEl = $('#stop');

function showOverlay() {
  $('#ocean-overlay')
    .css('visibility', 'visible')
    .css('z-index', 100);
}

function hideOverlay() {
  $('#ocean-overlay')
    .css('visibility', 'hidden')
    .css('z-index', 0);
}

function disableInitControls() {
  initialControls.find('input').prop('disabled', true);
}

function enableInitControls() {
  initialControls.find('input').prop('disabled', false);
}

function initializeEvolutionForm(game: Game, defaultParams: EvolutionParams) {
  evolutionControls.on('change', event => {
    const inputEl = $(event.target);
    console.log(inputEl);
    const name = inputEl.attr('name');
    game.setEvolutionParams({[name]: inputEl.val()});
  });

  evolutionControls.find('input').val(function() {
    return String(defaultParams[$(this).attr('name') as keyof EvolutionParams]);
  });
}

export function initControls(game: Game, defaultParams: EvolutionParams) {
  pauseEl.on('click', () => {
    if (game.isRunning) {
      game.pause();
      pauseEl.addClass('paused');
    } else {
      game.play();
      pauseEl.removeClass('paused');
    }
  });

  stopEl.on('click', () => {
    game.pause();

    showOverlay();
    enableInitControls();
  });

  startButton.on('click', () => {
    const startParams = {
      startFishNumber: Number(starkFishNumberInput.val()),
      startSharkNumber: Number(starkSharkNumberInput.val())
    };

    game.reset({startParams});
    game.play();

    hideOverlay();
    disableInitControls();
  });

  initializeEvolutionForm(game, defaultParams);
}
