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

export type WizardState = {
  showOneFishNext: boolean;
  showManyFishNext: boolean;
  showDoomedNext: boolean;
};

export class Wizard extends React.Component<{}, WizardState> {
  private oneFishExit = () => this.setState({showOneFishNext: true});
  private manyFishExit = () => this.setState({showManyFishNext: true});
  private doomedExit = () => this.setState({showDoomedNext: true});

  private cleanState = () =>
    this.setState({
      showOneFishNext: false,
      showManyFishNext: false,
      showDoomedNext: false
    });

  constructor(props: {}) {
    super(props);

    this.state = {
      showOneFishNext: false,
      showManyFishNext: false,
      showDoomedNext: false
    };
  }

  render() {
    const {showOneFishNext, showManyFishNext, showDoomedNext} = this.state;

    return (
      <div className={s.root}>
        <header className={s.header}>Wator</header>

        <StepWizard
          className={s.content}
          nav={<Navigation />}
          isLazyMount={false}
          onStepChange={this.cleanState}
        >
          <WizardPage>
            <p>
              It happened some time ago in a galaxy nearby. This galaxy was created and inhabited by a
              powerful space sprit. He looked like a giant misty pillow with stellar background shining
              through him. The spirit called himself God while other spirits from neighbour galaxies called
              him simply Josh.
            </p>
            <p>
              Josh has just returned home after visiting Earth. Heavily, like a rainy cloud he drifted through
              the void. He was thinking about life. The Earth was swarming with life, yet not a single planet
              in his own galaxy had even a spark of it. All the stars he created were shining in vane.
            </p>
            <p>
              He was passing a system with a small yellow star similar to the Sun when he started glowing with
              an idea. He ought to create the life of his own.
            </p>
            <NextButton>And then...</NextButton>
          </WizardPage>

          <WizardPage>
            <p>
              First he created a small planet on its orbit. He knew all life on Earth began in water so he
              filled his planet with a crystal blue ocean that covered every bit of the rocky land. The he
              filled his ocean with endless tiny weed so that no life ever dies from hunger. And then he
              created Dave, a fish.
            </p>

            <div className={s.illustration}>
              <Dave />
            </div>

            <NextButton>Behold the Genesis</NextButton>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={false} initialConfig={configOneFish} onExit={this.oneFishExit} />

            {showOneFishNext && <NextButton forOcean={true}>Proceed</NextButton>}
          </WizardPage>

          <WizardPage>
            <p>
              For a brief moment he was happy. But suddenly he understood that Dave lacks something very
              important for life. The purpose. He looked at Earth and right away he knew what he should do. He
              gave Dave an ability to give birth.
            </p>

            <NextButton>How Dave is craving his purpose?</NextButton>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={false} initialConfig={configManyFish} onExit={this.manyFishExit} />

            {showManyFishNext && <NextButton forOcean={true}>Proceed</NextButton>}
          </WizardPage>

          <WizardPage>
            <p>
              Oh no, Dave went out of control and kept reproducing until the ocean became overcrowded. He
              wanted Dave to be happy but instead he condemned him and all his family to miserable existence
              in this uninhabitable world. Josh was furious. He had to fix this.
            </p>

            <p>
              Storming in rage he evaporated the ocean leaving the planet sterile. When his thoughts where
              clear again he made a new ocean and a new Dave. He decided to make life balance life.
            </p>
          </WizardPage>

          <WizardPage>
            <p>
              He created Ed, a shark, a necessary evil. Ed would not eat weed like Dave, he would eat Dave.
            </p>

            <div className={s.illustration}>
              <Ed />
            </div>

            <p>
              Josh knew he should be careful not to make old mistakes. He let sharks breed, but he also made
              them die if they don't eat. This way it was just.
            </p>

            <NextButton>But is it really that simple?</NextButton>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={false} initialConfig={configDoomed} onExit={this.doomedExit} />

            {showDoomedNext && <NextButton forOcean={true}>Proceed</NextButton>}
          </WizardPage>

          <WizardPage>
            <p>
              Something was not quite right. This world was dead again. Sharks ate all the fish and died of
              hunger. He thought that he could fix it by making Ed breed slowly.
            </p>

            <p>Now Josh was faced with an ultimate challenge: how to strike the balance.</p>
            <NextButton>Let's give a helping hand</NextButton>
          </WizardPage>

          <WizardPage>
            <Ocean withControls={true} initialConfig={configSandbox} />
          </WizardPage>
        </StepWizard>
      </div>
    );
  }
}
