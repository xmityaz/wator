import * as React from 'react';
import s from './ResetButton.module.scss';

export type ResetButtonProps = {
  onClick: () => void;
};

export class ResetButton extends React.Component<ResetButtonProps> {
  render() {
    return (
      <button className={s.root} onClick={this.props.onClick}>
        Reset
      </button>
    );
  }
}
