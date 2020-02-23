import * as React from 'react';
import s from './ControlsButton.module.scss';

export type ControlsButtonProps = {
  onClick: () => void;
};

export class ControlsButton extends React.Component<ControlsButtonProps> {
  render() {
    return (
      <button className={s.root} onClick={this.props.onClick}>
        <span className={s.icon} />
      </button>
    );
  }
}
