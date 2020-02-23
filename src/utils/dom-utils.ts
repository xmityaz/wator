export const WIZARD_ID = 'wator-wizard';

export const scrollWizard = (top: number, behavior: string = 'smooth') => {
  const wizardEl = document.getElementById(WIZARD_ID);
  const stepWizEl = wizardEl && wizardEl.lastChild;

  if (stepWizEl) {
    (stepWizEl as any).lastChild.scrollTo({top, behavior});
  }
};
