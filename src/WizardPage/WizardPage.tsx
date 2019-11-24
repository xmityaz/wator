import React from 'react';
import s from './WizardPage.module.scss';

export type WizardPageProps = {
  // Own props

  // Wizard injected props
  nextStep?: () => void;
};

export const WizardPage: React.FC<WizardPageProps> = ({nextStep, children}) => {
  return (
    <div className={s.root}>
      <div className={s.pageContent}>{children}</div>

      <nav className={s.navigation}>
        <button type="button" onClick={nextStep} className={s.nextButton}>
          Next
        </button>
      </nav>
    </div>
  );
};
