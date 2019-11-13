import React from 'react';
import {EvolutionParams} from '../Ocean/Ocean.types';

export type EvolutionControlsProps = {
  values: EvolutionParams;
  onChange: (_: Partial<EvolutionParams>) => void;
};

export class EvolutionControls extends React.Component<EvolutionControlsProps> {
  onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.props.onChange({[name]: Number(value)});
  };

  render() {
    const {values} = this.props;

    return (
      <form>
        <div className="control-inputs">
          <div className="form-group">
            <label>Fish caviar throwing</label>
            <input
              value={values.fishReproducingRate}
              type="number"
              min="5"
              max="100"
              name="fishReproducingRate"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Shark pregnancy rate</label>
            <input
              value={values.sharkReproducingRate}
              type="number"
              min="5"
              max="100"
              name="sharkReproducingRate"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Shark energy</label>
            <input
              value={values.sharkMaxEnergy}
              type="number"
              min="5"
              max="50"
              name="sharkMaxEnergy"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Game speed</label>
            <input
              value={values.gameSpeed}
              type="number"
              min="20"
              max="1000"
              name="gameSpeed"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>
        </div>
      </form>
    );
  }
}
