import React from 'react';
import s from './WizardPage.module.scss';

export type WizardPageProps = {
  // Own props

  // Wizard injected props
  nextStep?: () => void;
  isActive?: boolean;
};

export const WizardPage: React.FC<WizardPageProps> = ({children, isActive, nextStep}) => {
  const childrenWithInjectedProps = React.Children.map(children, child => {
    return child && React.isValidElement(child) && typeof child.type !== 'string'
      ? React.cloneElement(child, {isActive, nextStep})
      : child;
  });
  const className = s.root + (!isActive ? ` ${s.inactive}` : '');

  return (
    <div className={className}>
      <div className={s.pageContent}>{childrenWithInjectedProps}</div>
    </div>
  );
};
