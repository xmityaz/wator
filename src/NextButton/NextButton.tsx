import * as React from 'react';
import s from './NextButton.module.scss';

export type NextButtonProps = {
  nextStep?: () => void;
  forOcean?: boolean;
  children: string;
  className?: string | null;
};

export type NextButtonState = {
  hovered: boolean;
};

export class NextButton extends React.Component<NextButtonProps, NextButtonState> {
  state = {
    hovered: false,
  };

  private onMouseEnter = () => {
    this.setState({hovered: true});
  };

  private onMouseLeave = () => {
    this.setState({hovered: false});
  };

  render() {
    const {nextStep, forOcean, children, className} = this.props;
    const {hovered} = this.state;

    const rootClassName =
      s.root + (forOcean ? ` ${s.forOcean}` : '') + (className ? ` ${className}` : '');
    const buttonClassName = s.button + (hovered ? ` ${s.in}` : '');

    return (
      <div className={rootClassName}>
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
