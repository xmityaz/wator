import * as React from 'react';
import s from './NextButton.module.scss';

export type NextButtonProps = {
  nextStep?: () => void;
  children: string;
};

export type NextButtonState = {
  hovered: boolean;
};

export class NextButton extends React.Component<NextButtonProps, NextButtonState> {
  state = {
    hovered: false
  };

  private onMouseEnter = () => {
    this.setState({hovered: true});
  };

  private onMouseLeave = () => {
    this.setState({hovered: false});
  };

  render() {
    const {nextStep, children} = this.props;
    const {hovered} = this.state;

    const buttonClassName = s.button + (hovered ? ` ${s.in}` : '');

    return (
      <div className={s.root}>
        <button
          className={buttonClassName}
          onClick={nextStep}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <span>{children}</span>
        </button>
      </div>
    );
  }
}
