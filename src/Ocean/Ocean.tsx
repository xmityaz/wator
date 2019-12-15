import React from 'react';
import {EvolutionParams, Config, StartParams, BoardSize} from './Ocean.types';
import s from './Ocean.module.scss';
import {processDay, PetMap, initializePetMap} from './logic';
import {Playground, BRICK_SIZE} from './playground';
import {EvolutionControls} from '../EvolutionControls/EvolutionControls';
import {StartControls} from '../StartControls/StartControls';
import wizardStyles from '../Wizard/Wizard.module.scss';

export type OceanProps = {
  withControls: boolean;
  initialConfig: Config;
  isActive?: boolean;
};

export type OceanState = {
  isRunning: boolean;
  evolutionParams: EvolutionParams;
  startParams: StartParams;
};

const MAX_HEIGHT = 160;

export class Ocean extends React.Component<OceanProps, OceanState> {
  private playground: Playground;
  private setPlayground = (playground: Playground) => (this.playground = playground);

  private petMap: PetMap;

  private gameLoop: any;

  private canvas: HTMLCanvasElement;

  private config: Config;
  private setConfig = (config: Config) => (this.config = config);

  private get gameSpeed() {
    return this.config.evolutionParams.gameSpeed;
  }

  private initCanvas = (el: HTMLCanvasElement) => {
    this.canvas = el;
  };

  private step = () => {
    this.playground.drawPetMap(this.petMap, this.config);
    processDay(this.petMap, this.config);
  };

  private onStart = () => {
    this.petMap = initializePetMap(this.config);
    this.play();
  };

  private getFittableBoardSize = (): BoardSize => {
    const wizEl = document.getElementsByClassName(wizardStyles.content)[0];
    const pageEl = wizEl.lastElementChild as HTMLElement;
    const clientRect = pageEl.getBoundingClientRect();

    return {
      width: Math.floor(clientRect.width / BRICK_SIZE.WIDTH),
      height: Math.min(MAX_HEIGHT, Math.floor(clientRect.height / BRICK_SIZE.HEIGHT))
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
    this.setState({
      startParams: {...this.state.startParams, ...startParams},
      evolutionParams: {...this.state.evolutionParams, ...evolutionParams}
    });

    this.playground = new Playground(this.config, this.canvas);
  };

  setEvolutionParams = (evolutionParams: Partial<EvolutionParams>) => {
    this.setState({evolutionParams: {...this.state.evolutionParams, ...evolutionParams}}, () => {
      if (this.state.isRunning) {
        clearInterval(this.gameLoop);
        this.gameLoop = setInterval(() => requestAnimationFrame(this.step), this.gameSpeed);
      }
    });
  };

  setStartParams = (startParams: Partial<StartParams>) => {
    this.setState({
      startParams: {...this.state.startParams, ...startParams}
    });
  };

  constructor(props: OceanProps) {
    super(props);

    this.state = {
      isRunning: false,
      evolutionParams: this.props.initialConfig.evolutionParams,
      startParams: this.props.initialConfig.startParams
    };
  }

  componentDidMount() {
    const {startParams, evolutionParams} = this.state;
    const boardSize = this.getFittableBoardSize();

    this.setConfig({boardSize, startParams, evolutionParams});
    this.setPlayground(new Playground(this.config, this.canvas));
  }

  componentDidUpdate(oldProps: OceanProps) {
    if (oldProps.isActive && !this.props.isActive && this.state.isRunning) {
      this.pause();
    }
  }

  render() {
    const {withControls} = this.props;
    const {isRunning} = this.state;

    return (
      <div className={s.root}>
        <div className={s.oceanWrapper}>
          <canvas
            ref={this.initCanvas}
            width={this.config && BRICK_SIZE.WIDTH * this.config.boardSize.width}
            height={this.config && BRICK_SIZE.HEIGHT * this.config.boardSize.height}
          />

          {!isRunning && (
            <div className={s.overlay}>
              <div className="control-buttons">
                <button className={s.btn} onClick={this.onStart}>
                  Start
                </button>
                {/* <button id="reset-button">Reset</button> */}
              </div>
            </div>
          )}

          {isRunning && (
            <div className={s.pauseOverlay}>
              <div className={s.pause} onClick={this.pause} />
            </div>
          )}
        </div>

        {withControls && (
          <div className={s.controls}>
            <StartControls
              disabled={isRunning}
              onChange={this.setStartParams}
              values={this.state.startParams}
            />

            <EvolutionControls values={this.state.evolutionParams} onChange={this.setEvolutionParams} />
          </div>
        )}
      </div>
    );
  }
}
