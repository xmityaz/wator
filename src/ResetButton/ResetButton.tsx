import * as React from 'react';
import s from './ResetButton.module.scss';

export type ResetButtonProps = {
  onClick: () => void;
};

export class ResetButton extends React.Component<ResetButtonProps> {
  render() {
    return (
      <button className={s.root} onClick={this.props.onClick}>
        <span className={s.icon}>
          <span className={s.iconBorder} />
          <span className={s.iconArrow} />
        </span>
        Reset
      </button>
    );
  }
}
