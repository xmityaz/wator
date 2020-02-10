import React from 'react';
import {StartParams} from '../Ocean/Ocean.types';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import {trackStyle, handleStyle} from './styles';

export type StartControlsProps = {
  className?: string;
  values: StartParams;
  onChange: (startParams: Partial<StartParams>) => void;
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

export class StartControls extends React.Component<StartControlsProps> {
  onSliderChange = (name: string) => (value: number) => {
    this.props.onChange({[name]: value});
  };

  render() {
    const {values, className} = this.props;

    return (
      <form className={className}>
        <div>
          <label>Fish number at start</label>
          <SliderWithTooltip
            min={1}
            max={2500}
            value={values.startFishNumber}
            onChange={this.onSliderChange('startFishNumber')}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
          />
        </div>
        <div>
          <label>Shark number at start</label>
          <SliderWithTooltip
            min={1}
            max={2500}
            value={values.startSharkNumber}
            onChange={this.onSliderChange('startSharkNumber')}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
          />
        </div>
      </form>
    );
  }
}
