import React from 'react';
import s from './Navigation.module.scss';

export type NavigationProps = {
  totalSteps?: number;
  currentStep?: number;
  goToStep?: (step: number) => void;
};

export class Navigation extends React.Component<NavigationProps> {
  render() {
    const {totalSteps, currentStep, goToStep} = this.props;
    const dots = [];

    for (let i = 1; totalSteps && i <= totalSteps; i += 1) {
      const isActive = currentStep === i;
      dots.push(
        <div
          key={`step-${i}`}
          className={`${s.item} ${isActive ? s.active : ''}`}
          onClick={() => goToStep && goToStep(i)}
        />
      );
    }

    return (
      <footer className={s.root}>
        <div className={s.navigation}>{dots}</div>

        <div className={s.facebookBtn}>
          <div
            className="fb-share-button"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout="button"
            data-size="large"
          />
        </div>
      </footer>
    );
  }
}
