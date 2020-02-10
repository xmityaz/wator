import React from 'react';
import {EvolutionParams, Config, StartParams, Size} from './Ocean.types';
import s from './Ocean.module.scss';
import {processDay, PetMap, initializePetMap} from './logic';
import {Playground} from './playground';
import {EvolutionControls} from '../EvolutionControls/EvolutionControls';
import {StartControls} from '../StartControls/StartControls';
import wizardStyles from '../Wizard/Wizard.module.scss';
import wizardPageStyles from '../WizardPage/WizardPage.module.scss';
import {shouldExit} from './exitConditionsLogic';
import {PlayButton} from '../PlayButton/PlayButton';
import {ResetButton} from '../ResetButton/ResetButton';

export type OceanProps = {
  withControls: boolean;
  initialConfig: Config;
  isActive?: boolean;
  onExit?: () => void;
};

export type OceanState = {
  exitProcessed: boolean;
  isRunning: boolean;
  initialized: boolean;
  config: Config;
};

const MAX_HEIGHT = 160;
const CONTROLS_WIDTH = 255; // 215 width + 40 margin
const SCROLL_MARGIN = 1;

export class Ocean extends React.Component<OceanProps, OceanState> {
  private playground: Playground;
  private setPlayground = (playground: Playground) => (this.playground = playground);

  private petMap: PetMap;

  private gameLoop: any;
  private stepsCounter = 0;

  private canvas: HTMLCanvasElement;

  private get gameSpeed() {
    return this.state.config.evolutionParams.gameSpeed;
  }

  private initCanvas = (el: HTMLCanvasElement) => {
    this.canvas = el;
  };

  private processExitConditions = () => {
    if (
      this.props.onExit &&
      this.state.config.exitConditions &&
      !this.state.exitProcessed &&
      shouldExit({stepsCounter: this.stepsCounter, petMap: this.petMap, config: this.state.config})
    ) {
      this.props.onExit();
      this.setState({exitProcessed: true});
    }
  };

  private step = () => {
    this.processExitConditions();
    this.stepsCounter++;

    this.state.config.rectMode
      ? this.playground.drawRectPetMap(this.petMap, this.state.config)
      : this.playground.drawPetMap(this.petMap, this.state.config);

    processDay(this.petMap, this.state.config);
  };

  private onPlayButtonClick = () => {
    if (!this.state.initialized) {
      this.onStart();
    } else {
      this.state.isRunning ? this.pause() : this.play();
    }
  };

  private onStart = () => {
    this.setState({exitProcessed: false, initialized: true});
    this.stepsCounter = 0;

    this.petMap = initializePetMap(this.state.config);
    this.play();
  };

  private setConfig = (configChanges: Partial<Config>) => {
    this.setState({config: {...this.state.config, ...configChanges}});
  };

  private getFittableSize = (): Size => {
    const {brickSize} = this.state.config;
    const pageEl = document.getElementsByClassName(wizardPageStyles.root)[0];
    const wizEl = document.getElementsByClassName(wizardStyles.content)[0].lastElementChild as HTMLElement;

    const pageRect = pageEl.getBoundingClientRect();
    const wizRect = wizEl.getBoundingClientRect();
    const controlsWidth = CONTROLS_WIDTH / brickSize.width;

    return {
      width: Math.floor(pageRect.width / brickSize.width) - controlsWidth,
      height:
        Math.min(MAX_HEIGHT - brickSize.height, Math.floor(wizRect.height / brickSize.height)) - SCROLL_MARGIN
    };
  };

  pause = () => {
    this.setState({isRunning: false});
    clearInterval(this.gameLoop);
  };

  play = () => {
    this.setState({isRunning: true});
    this.gameLoop = setInterval(() => requestAnimationFrame(this.step), this.gameSpeed);
  };

  reset = ({startParams, evolutionParams}: Partial<Config> = {}) => {
    this.setConfig({
      startParams: {...this.state.config.startParams, ...startParams},
      evolutionParams: {...this.state.config.evolutionParams, ...evolutionParams}
    });

    this.playground = new Playground(this.state.config, this.canvas);

    this.setState({exitProcessed: false, initialized: true});
    this.stepsCounter = 0;

    this.petMap = initializePetMap(this.state.config);

    if (this.state.isRunning) {
      clearInterval(this.gameLoop);
      this.play();
    } else {
      this.step();
    }
  };

  setEvolutionParams = (evolutionParams: Partial<EvolutionParams>) => {
    this.setConfig({
      evolutionParams: {...this.state.config.evolutionParams, ...evolutionParams}
    });

    if (this.state.isRunning) {
      clearInterval(this.gameLoop);
      this.gameLoop = setInterval(() => requestAnimationFrame(this.step), this.gameSpeed);
    }
  };

  setStartParams = (startParams: Partial<StartParams>) => {
    this.setConfig({
      startParams: {...this.state.config.startParams, ...startParams}
    });
  };

  constructor(props: OceanProps) {
    super(props);

    this.state = {
      isRunning: false,
      exitProcessed: false,
      initialized: false,
      config: this.props.initialConfig
    };
  }

  componentDidMount() {
    const boardSize = this.getFittableSize();

    this.setConfig({boardSize});
    this.setPlayground(new Playground(this.state.config, this.canvas));
  }

  componentDidUpdate(oldProps: OceanProps) {
    if (oldProps.isActive && !this.props.isActive && this.state.isRunning) {
      this.pause();
    }
  }

  render() {
    const {withControls, isActive} = this.props;
    const {isRunning, config, exitProcessed} = this.state;

    return (
      <div className={s.root}>
        <div className={s.oceanWrapper}>
          <canvas
            ref={this.initCanvas}
            width={config && config.brickSize.width * config.boardSize.width}
            height={config && config.brickSize.height * config.boardSize.height}
          />

          {!isRunning && isActive && !withControls && (
            <div className={s.overlay}>
              <PlayButton isPlaying={false} onClick={this.onStart} />
            </div>
          )}

          {exitProcessed && <div className={s.exitOverlay} />}
        </div>

        {withControls && (
          <div className={s.controls}>
            <div className={s.controlsButtons}>
              <PlayButton isPlaying={isRunning} onClick={this.onPlayButtonClick} />
              <ResetButton onClick={this.reset} />
            </div>

            <StartControls
              className={s.startControls}
              onChange={this.setStartParams}
              values={this.state.config.startParams}
            />

            <EvolutionControls
              className={s.evolutionControls}
              values={this.state.config.evolutionParams}
              onChange={this.setEvolutionParams}
            />
          </div>
        )}
      </div>
    );
  }
}
