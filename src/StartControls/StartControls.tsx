import React from 'react';
import {StartParams} from '../Ocean/Ocean.types';

export type StartControlsProps = {
  disabled: boolean;
  values: StartParams;
  onChange: (startParams: Partial<StartParams>) => void;
};

export class StartControls extends React.Component<StartControlsProps> {
  onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.props.onChange({[name]: Number(value)});
  };

  render() {
    const {disabled, values} = this.props;

    return (
      <form id="initial-controls">
        <div className="control-inputs">
          <div className="form-group">
            <label>Fish number at start</label>
            <div data-toggle="tooltip" data-placement="right" title="Stop simulation to change">
              <input
                type="number"
                min="5"
                max="100"
                value={values.startFishNumber}
                name="startFishNumber"
                className="form-control"
                onChange={this.onInputChange}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Shark number at start</label>
            <div data-toggle="tooltip" data-placement="right" title="Stop simulation to change">
              <input
                type="number"
                min="5"
                max="100"
                value={values.startSharkNumber}
                name="startSharkNumber"
                className="form-control"
                onChange={this.onInputChange}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
