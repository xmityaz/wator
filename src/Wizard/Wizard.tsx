import React from 'react';
import StepWizard from 'react-step-wizard';
import s from './Wizard.module.scss';
import {Ocean} from '../Ocean/Ocean';
import {configOneFish, configManyFish, configDoomed} from '../Ocean/watorExampleConfigs';
import {WizardPage} from '../WizardPage/WizardPage';
import {Navigation} from '../Navigation/Navigation';

export class Wizard extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <header className={s.header}>Wator</header>

        <StepWizard className={s.content} nav={<Navigation />}>
          <WizardPage>
            <div>
              It all started in 1984 when one god-like creature who lived in our neighbor galaxy. He just
              returned home after visiting Earth. And he was depressed. His own galaxy was beautiful- it had
              stunning nebulas, one of the biggest and shiniest quasars in the universe and neutron stars
              spinning million times per second. But there was no life in it like there was on Earth. Now he
              saw it clearly. All he wanted now was to create life. He started by creating a planet. He knew
              all life on Earth began in the water so he filled his planet with a crystal blue ocean that
              covered every bit of the land. And then he created Dave, a fish. He also filled his ocean with
              endless plankton so that Dave never dies from hunger.
            </div>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={false} initialConfig={configOneFish} />
          </WizardPage>

          <WizardPage>
            <div>
              For a brief moment he was happy. But suddenly he understood that Dave lacks something very
              important for life. The purpose. He looked at Earth and right away he knew what he should do. He
              gave Dave an ability to give birth.
            </div>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={false} initialConfig={configManyFish} />
          </WizardPage>

          <WizardPage>
            <div>
              Oh no, Dave went out of control and kept reproducing until the ocean became overcrowded. He
              wanted Dave to be happy but instead he condemned him and all his family to miserable existence
              in this uninhabitable world. He had to fix this. And he decided that life will balance life. He
              created Ed, a shark. Ed will not eat plankton like Dave, he will eat Dave. Its a necessary evil
              but he knew he should be careful not to make old mistakes. He had to let Ed breed. But he had to
              also let him die. This way it was just.
            </div>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={false} initialConfig={configDoomed} />
          </WizardPage>

          <WizardPage>
            <div>
              Something was not quite right. This world was dead again. Sharks ate all the fish and died of
              hunger. He thought that he could fix it by making Ed breed slowly.
            </div>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={true} initialConfig={configDoomed} />
          </WizardPage>
        </StepWizard>
      </div>
    );
  }
}
