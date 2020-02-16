import {ExitConditions, Config} from './Ocean.types';
import {PetArr} from './logic';

type ExitConditionsArgs = {stepsCounter: number; petArr: PetArr; config: Config};

const processTimeout = ({stepsCounter}: ExitConditionsArgs) => {
  return stepsCounter >= 20;
};

const processOverpopulation = ({petArr, config}: ExitConditionsArgs) => {
  return petArr.filter(pet => !!pet).length >= config.boardSize.height * config.boardSize.width;
};

const processExtinction = ({petArr}: ExitConditionsArgs) => {
  return petArr.filter(pet => !!pet).length === 0;
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
