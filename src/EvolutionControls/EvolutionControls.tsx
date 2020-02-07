import React from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import {EvolutionParams} from '../Ocean/Ocean.types';
import 'rc-slider/assets/index.css';

export type EvolutionControlsProps = {
  className?: string;
  values: EvolutionParams;
  onChange: (_: Partial<EvolutionParams>) => void;
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

export class EvolutionControls extends React.Component<EvolutionControlsProps> {
  onSliderChange = (name: string) => (value: number) => {
    this.props.onChange({[name]: value});
  };

  render() {
    const {values, className} = this.props;

    return (
      <form className={className}>
        <div>
          <label>Fish caviar throwing</label>

          <SliderWithTooltip
            min={80}
            max={150}
            value={values.fishReproducingRate}
            onChange={this.onSliderChange('fishReproducingRate')}
          />
        </div>
        <div>
          <label>Shark pregnancy rate</label>
          <SliderWithTooltip
            min={80}
            max={150}
            value={values.sharkReproducingRate}
            onChange={this.onSliderChange('sharkReproducingRate')}
          />
        </div>
        <div>
          <label>Shark energy</label>

          <SliderWithTooltip
            min={5}
            max={150}
            value={values.sharkMaxEnergy}
            onChange={this.onSliderChange('sharkMaxEnergy')}
          />
        </div>
        <div>
          <label>Game speed</label>

          <SliderWithTooltip
            min={5}
            max={150}
            value={values.gameSpeed}
            onChange={this.onSliderChange('gameSpeed')}
          />
        </div>
      </form>
    );
  }
}
