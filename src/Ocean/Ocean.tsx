import React from 'react';
import {EvolutionParams, Config, StartParams} from './Ocean.types';
import s from './Ocean.module.scss';
import {processDay, PetMap, initializePetMap} from './logic';
import {Playground, BRICK_SIZE} from './playground';
import {EvolutionControls} from '../EvolutionControls/EvolutionControls';
import {StartControls} from '../StartControls/StartControls';

export type OceanProps = {
  withControls: boolean;
  initialConfig: Config;
};

export type OceanState = {
  isRunning: boolean;
  evolutionParams: EvolutionParams;
  startParams: StartParams;
};

export class Ocean extends React.Component<OceanProps, OceanState> {
  private playground: Playground;

  private petMap: PetMap;

  private gameLoop: any;

  private canvas: HTMLCanvasElement;

  private get config(): Config {
    return {
      boardSize: this.props.initialConfig.boardSize, // TODO: replace on props
      startParams: this.state.startParams,
      evolutionParams: this.state.evolutionParams
    };
  }

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
    this.playground = new Playground(this.config, this.canvas);
    this.petMap = initializePetMap(this.config);
  }

  render() {
    const {withControls} = this.props;
    const {isRunning} = this.state;

    return (
      <div className={s.root}>
        <div className={s.oceanWrapper}>
          <canvas
            ref={this.initCanvas}
            width={BRICK_SIZE.WIDTH * this.config.boardSize.width}
            height={BRICK_SIZE.HEIGHT * this.config.boardSize.height}
          />

          {!isRunning && (
            <div className={s.overlay}>
              <div className="control-buttons">
                <button className="btn btn-primary" onClick={this.onStart}>
                  Start
                </button>
                {/* <button id="reset-button">Reset</button> */}
              </div>
            </div>
          )}

          {isRunning && (
            <div className={s.pauseOverlay}>
              <div className={s.pause} onClick={this.pause} />

              {/* <div className={s.stop} onClick={this.pause} /> */}
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
