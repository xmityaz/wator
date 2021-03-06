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
import {WIZARD_ID, scrollWizard} from '../utils/dom-utils';

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

  private scrollWizPageToTop = () => scrollWizard(0);

  private onStepChange = () => {
    this.cleanState();
    this.scrollWizPageToTop();
  };

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
      <div className={s.root} id={WIZARD_ID}>
        <header className={s.header}>Wator</header>

        <StepWizard
          className={s.content}
          nav={<Navigation />}
          isLazyMount={false}
          onStepChange={this.onStepChange}
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
              filled his planet with a crystal blue ocean that covered every bit of the rocky land. Then he
              filled his ocean with endless tiny weed so that no life ever dies from hunger. And then he
              created Dave, a fish.
            </p>

            <div className={s.illustration}>
              <Dave />
            </div>

            <NextButton>Behold the Genesis</NextButton>
          </WizardPage>

          <WizardPage ocean={true}>
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

          <WizardPage ocean={true}>
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

            <NextButton>Seek for the balance</NextButton>
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

          <WizardPage ocean={true}>
            <Ocean withControls={false} initialConfig={configDoomed} onExit={this.doomedExit} />

            {showDoomedNext && <NextButton forOcean={true}>Proceed</NextButton>}
          </WizardPage>

          <WizardPage>
            <p>
              Something was not quite right. This world was dead again. Sharks ate all the fish and died of
              hunger.
            </p>

            <p>Now Josh was faced with an ultimate challenge: how to strike the balance.</p>
            <NextButton>Let's give a helping hand</NextButton>
          </WizardPage>

          <WizardPage ocean={true}>
            <Ocean withControls={true} initialConfig={configSandbox} />
          </WizardPage>

          <WizardPage>
            <p>
              Now that you've played around with a system of just 2 components, imagine how hard it would be to keep the balance in something much bigger and more complex. Something like our own planet. With ecosystems like rainforests where hundreds of species interact with each other orchestrated by global climate. Imagine how effects from things like global warming can cascade through interconnected layers of such living systems wreaking havoc on them. Play safe, trust science, keep the balance.
            </p>

            <img src="earth.jpeg" alt="The Earth" style={{width: '100%'}}/>
          </WizardPage>
        </StepWizard>
      </div>
    );
  }
}
