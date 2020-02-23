import * as smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export const WIZARD_ID = 'wator-wizard';

export const scrollWizard = (top: number, behavior: string = 'smooth') => {
  const wizardEl = document.getElementById(WIZARD_ID);
  const stepWizEl = wizardEl && wizardEl.lastChild;

  if (stepWizEl) {
    (stepWizEl as any).lastChild.scrollTo({top, behavior});
  }
};
