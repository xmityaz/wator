import React from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import {EvolutionParams} from '../Ocean/Ocean.types';
import 'rc-slider/assets/index.css';

export type EvolutionControlsProps = {
  values: EvolutionParams;
  onChange: (_: Partial<EvolutionParams>) => void;
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

export class EvolutionControls extends React.Component<EvolutionControlsProps> {
  onSliderChange = (name: string) => (value: number) => {
    this.props.onChange({[name]: value});
  };

  render() {
    const {values} = this.props;

    return (
      <form>
        <div className="control-inputs">
          <div className="form-group">
            <label>Fish caviar throwing</label>

            <SliderWithTooltip
              min={5}
              max={150}
              value={values.fishReproducingRate}
              onChange={this.onSliderChange('fishReproducingRate')}
            />
          </div>
          <div className="form-group">
            <label>Shark pregnancy rate</label>
            <SliderWithTooltip
              min={5}
              max={150}
              value={values.sharkReproducingRate}
              onChange={this.onSliderChange('sharkReproducingRate')}
            />
          </div>
          <div className="form-group">
            <label>Shark energy</label>

            <SliderWithTooltip
              min={5}
              max={150}
              value={values.sharkMaxEnergy}
              onChange={this.onSliderChange('sharkMaxEnergy')}
            />
          </div>
          <div className="form-group">
            <label>Game speed</label>

            <SliderWithTooltip
              min={5}
              max={150}
              value={values.gameSpeed}
              onChange={this.onSliderChange('gameSpeed')}
            />
          </div>
        </div>
      </form>
    );
  }
}
