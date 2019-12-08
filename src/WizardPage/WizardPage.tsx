import React from 'react';
import s from './WizardPage.module.scss';

export type WizardPageProps = {
  // Own props

  // Wizard injected props
  nextStep?: () => void;
  isActive?: boolean;
};

export const WizardPage: React.FC<WizardPageProps> = ({nextStep, children, isActive}) => {
  const childrenWithInjectedProps = React.Children.map(children, child => {
    return child && React.isValidElement(child) && typeof child.type !== 'string'
      ? React.cloneElement(child, {isActive})
      : child;
  });

  return (
    <div className={s.root}>
      <div className={s.pageContent}>{childrenWithInjectedProps}</div>

      <nav className={s.navigation}>
        <button type="button" onClick={nextStep} className={s.nextButton}>
          Next
        </button>
      </nav>
    </div>
  );
};
