import * as React from 'react';
import s from './PlayButton.module.scss';

export type PlayButtonProps = {
  isPlaying: boolean;
  onClick: () => void;
};

export class PlayButton extends React.Component<PlayButtonProps> {
  render() {
    const {isPlaying, onClick} = this.props;
    const className = s.root + ` ${isPlaying ? s.playing : s.paused}`;

    return (
      <button className={className} onClick={onClick}>
        <i>P</i>
        <i>l</i>
        <i>a</i>
        <i>y</i>
        <i>use</i>
      </button>
    );
  }
}
