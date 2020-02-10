import React from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import {EvolutionParams} from '../Ocean/Ocean.types';
import 'rc-slider/assets/index.css';
import {trackStyle, handleStyle} from './styles';

export type EvolutionControlsProps = {
  className?: string;
  values: EvolutionParams;
  onChange: (_: Partial<EvolutionParams>) => void;
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

const convertToValueFromPercent = (min: number, max: number, percent: number) => {
  const diff = max - min;
  return Math.floor(((100 - percent) * diff) / 100) + min;
};

const convertToPercentFromValue = (min: number, max: number, value: number) => {
  const diff = max - min;
  return 100 - (100 / diff) * (value - min);
};

const getStep = (min: number, max: number) => {
  return 100 / (max - min);
};

export class EvolutionControls extends React.Component<EvolutionControlsProps> {
  private formatValue = (value: number) => Math.round(value);

  onSliderChange = (name: string, min: number, max: number) => (value: number) => {
    this.props.onChange({[name]: convertToValueFromPercent(min, max, value)});
  };

  render() {
    const {values, className} = this.props;

    return (
      <form className={className}>
        <div>
          <label>Fish reproducing rate</label>

          <SliderWithTooltip
            min={1}
            max={100}
            step={getStep(80, 150)}
            onChange={this.onSliderChange('fishReproducingRate', 80, 150)}
            value={convertToPercentFromValue(80, 150, values.fishReproducingRate)}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            tipFormatter={this.formatValue}
          />
        </div>
        <div>
          <label>Shark reproducing rate</label>
          <SliderWithTooltip
            min={1}
            max={100}
            step={getStep(120, 160)}
            onChange={this.onSliderChange('sharkReproducingRate', 120, 160)}
            value={convertToPercentFromValue(120, 160, values.sharkReproducingRate)}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            tipFormatter={this.formatValue}
          />
        </div>
        <div>
          <label>Shark hunger</label>

          <SliderWithTooltip
            min={1}
            max={100}
            step={getStep(5, 105)}
            onChange={this.onSliderChange('sharkMaxEnergy', 5, 105)}
            value={convertToPercentFromValue(5, 105, values.sharkMaxEnergy)}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            tipFormatter={this.formatValue}
          />
        </div>
        <div>
          <label>Game speed</label>

          <SliderWithTooltip
            min={1}
            max={100}
            step={getStep(5, 105)}
            onChange={this.onSliderChange('gameSpeed', 5, 105)}
            value={convertToPercentFromValue(5, 105, values.gameSpeed)}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            tipFormatter={this.formatValue}
          />
        </div>
      </form>
    );
  }
}
