import {ExitConditions, Config} from './Ocean.types';
import {PetMap} from './logic';

type ExitConditionsArgs = {stepsCounter: number; petMap: PetMap; config: Config};

const processTimeout = ({stepsCounter}: ExitConditionsArgs) => {
  return stepsCounter >= 20;
};

const processOverpopulation = ({petMap, config}: ExitConditionsArgs) => {
  return Object.keys(petMap).length >= config.boardSize.height * config.boardSize.width;
};

const processExtinction = ({petMap}: ExitConditionsArgs) => {
  return Object.keys(petMap).length === 0;
};

const exitConditionFunctionMap: {[condition in ExitConditions]: (args: ExitConditionsArgs) => boolean} = {
  timeout: processTimeout,
  overpopulation: processOverpopulation,
  extinction: processExtinction
};

export function shouldExit(args: ExitConditionsArgs) {
  if (args.config.exitConditions) {
    return args.config.exitConditions.find((condition: ExitConditions) =>
      exitConditionFunctionMap[condition](args)
    );
  }

  return false;
}
