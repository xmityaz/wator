import React from 'react';
import {StartParams} from '../Ocean/Ocean.types';
import Slider, {createSliderWithTooltip} from 'rc-slider';

export type StartControlsProps = {
  className?: string;
  disabled: boolean;
  values: StartParams;
  onChange: (startParams: Partial<StartParams>) => void;
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

export class StartControls extends React.Component<StartControlsProps> {
  onSliderChange = (name: string) => (value: number) => {
    this.props.onChange({[name]: value});
  };

  render() {
    const {disabled, values, className} = this.props;

    return (
      <form className={className}>
        <div>
          <label>Fish number at start</label>
          <SliderWithTooltip
            min={1}
            max={2500}
            value={values.startFishNumber}
            onChange={this.onSliderChange('startFishNumber')}
            disabled={disabled}
          />
        </div>
        <div>
          <label>Shark number at start</label>
          <SliderWithTooltip
            min={1}
            max={2500}
            value={values.startSharkNumber}
            onChange={this.onSliderChange('startSharkNumber')}
            disabled={disabled}
          />
        </div>
      </form>
    );
  }
}
