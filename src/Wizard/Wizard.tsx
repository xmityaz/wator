import React from 'react';
import StepWizard from 'react-step-wizard';
import s from './Wizard.module.scss';
import {Ocean} from '../Ocean/Ocean';
import {configOneFish, configManyFish, configDoomed, configSandbox} from '../Ocean/watorExampleConfigs';
import {WizardPage} from '../WizardPage/WizardPage';
import {Navigation} from '../Navigation/Navigation';
import {Dave} from '../icons/Dave';
import {Ed} from '../icons/Ed';
import {NextButton} from '../NextButton/NextButton';

export class Wizard extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <header className={s.header}>Wator</header>

        <StepWizard className={s.content} nav={<Navigation />} isLazyMount={false}>
          <WizardPage>
            <div>
              <p>
                It happened some time ago in a galaxy nearby. This galaxy was created and inhabited by a
                powerful space sprit. He looked like a giant misty pillow with stellar background shining
                through him. The spirit called himself God while other spirits from neighbour galaxies called
                him simply Josh.
              </p>
              <p>
                Josh has just returned home after visiting Earth. Heavily, like a rainy cloud he drifted
                through the void. He was thinking about life. The Earth was swarming with life, yet not a
                single planet in his own galaxy had even a spark of it. All the stars he created were shining
                in vane.
              </p>
              <p>
                He was passing a system with a small yellow star similar to the Sun when he started glowing
                with an idea. He ought to create the life of his own.
              </p>
              <p>
                First he created a small planet on its orbit. He knew all life on Earth began in water so he
                filled his planet with a crystal blue ocean that covered every bit of the rocky land. The he
                filled his ocean with endless tiny weed so that no life ever dies from hunger. And then he
                created Dave, a fish.
              </p>
            </div>

            <Dave />

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

            <Ed />
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
            <Ocean withControls={true} initialConfig={configSandbox} />
          </WizardPage>
        </StepWizard>
      </div>
    );
  }
}
