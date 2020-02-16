import {Config} from './Ocean.types';

type Fish = {
  cyclesSinceReproduce: number;
};

type Shark = {
  cyclesSinceReproduce: number;
  energy: number;
};

export type Pet = Fish | Shark;

export type PetArr = (Pet | null)[]; // The key contains both x and y coordinates by combining in one big binary nymber

export function isFish(pet: Pet | null) {
  return pet && typeof (pet as Shark).energy === 'undefined';
}

export const getXYFromIndex = (index: number) => {
  return [index >> 8, index & 0xff];
};

export const getIndexFromXY = (x: number, y: number) => {
  return (x << 8) ^ y;
};

function getRandomEl(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function processFishMove(petArr: PetArr, position: number, {boardSize}: Config): number {
  const [x, y] = getXYFromIndex(position);

  const west = getIndexFromXY(x <= 0 ? boardSize.width - 1 : x - 1, y);
  const east = getIndexFromXY(x >= boardSize.width ? 0 : x + 1, y);
  const south = getIndexFromXY(x, y <= 0 ? boardSize.height - 1 : y - 1);
  const north = getIndexFromXY(x, y >= boardSize.height ? 0 : y + 1);
  const positions = [];

  if (!petArr[west]) {
    positions.push(west);
  }
  if (!petArr[east]) {
    positions.push(east);
  }
  if (!petArr[south]) {
    positions.push(south);
  }
  if (!petArr[north]) {
    positions.push(north);
  }

  if (positions.length > 0) {
    const newPosition = getRandomEl(positions);

    petArr[newPosition] = petArr[position];
    petArr[position] = null;

    return newPosition;
  }

  return position;
}

function processPetReproduce(
  petArr: PetArr,
  positionToThrowCaviarIn: number,
  position: number,
  {evolutionParams}: Config
) {
  const pet = petArr[position];
  const petIsFish = isFish(pet);
  const reproducingRate = petIsFish
    ? evolutionParams.fishReproducingRate
    : evolutionParams.sharkReproducingRate;

  if (pet && pet.cyclesSinceReproduce >= reproducingRate && positionToThrowCaviarIn !== position) {
    petArr[positionToThrowCaviarIn] = petIsFish
      ? {cyclesSinceReproduce: 0}
      : {cyclesSinceReproduce: 0, energy: evolutionParams.sharkMaxEnergy};

    pet.cyclesSinceReproduce = 0;
  }
}

function processSharkMove(petArr: PetArr, position: number, config: Config): number | null {
  const shark = petArr[position] as Shark;
  const [x, y] = getXYFromIndex(position);

  const west = getIndexFromXY(x <= 0 ? config.boardSize.width - 1 : x - 1, y);
  const east = getIndexFromXY(x >= config.boardSize.width ? 0 : x + 1, y);
  const south = getIndexFromXY(x, y <= 0 ? config.boardSize.height - 1 : y - 1);
  const north = getIndexFromXY(x, y >= config.boardSize.height ? 0 : y + 1);
  const neighbourFishPositions = [];

  if (petArr[west] && isFish(petArr[west])) {
    neighbourFishPositions.push(west);
  }
  if (petArr[east] && isFish(petArr[east])) {
    neighbourFishPositions.push(east);
  }
  if (petArr[south] && isFish(petArr[south])) {
    neighbourFishPositions.push(south);
  }
  if (petArr[north] && isFish(petArr[north])) {
    neighbourFishPositions.push(north);
  }

  if (neighbourFishPositions.length > 0) {
    const newPosition = getRandomEl(neighbourFishPositions);
    petArr[newPosition] = petArr[position];

    petArr[position] = null;
    shark.energy = config.evolutionParams.sharkMaxEnergy;

    return newPosition;
  } else if (shark.energy > config.evolutionParams.sharkMaxEnergy) {
    shark.energy = config.evolutionParams.sharkMaxEnergy;
  } else if (shark.energy === 0) {
    petArr[position] = null;
    return null;
  }

  shark.energy--;

  return processFishMove(petArr, position, config);
}

export function initializePetArr({startParams, boardSize, evolutionParams}: Config) {
  const petMap: PetArr = [];
  const animalLength = startParams.startFishNumber + startParams.startSharkNumber;
  let counter = 0;

  while (counter < animalLength) {
    const x = Math.floor(boardSize.width * Math.random());
    const y = Math.floor(boardSize.height * Math.random());
    const position = getIndexFromXY(x, y);

    if (!petMap[position]) {
      petMap[position] =
        counter < startParams.startSharkNumber
          ? {cyclesSinceReproduce: 0, energy: evolutionParams.sharkMaxEnergy}
          : {cyclesSinceReproduce: 0};

      counter++;
    }
  }

  return petMap;
}

export function processDay(petArr: PetArr, config: Config) {
  const fishPositions: number[] = [];
  const sharkPositions: number[] = [];

  petArr.forEach((pet, position) => {
    if (pet) {
      isFish(pet) ? fishPositions.push(position) : sharkPositions.push(position);
    }
  });

  fishPositions.forEach(position => {
    const newPosition = processFishMove(petArr, position, config);
    (petArr[newPosition] as Pet).cyclesSinceReproduce++;
    processPetReproduce(petArr, position, newPosition, config);
  });

  sharkPositions.forEach(position => {
    const newPosition = processSharkMove(petArr, position, config);
    if (newPosition) {
      (petArr[newPosition] as Pet).cyclesSinceReproduce++;
      processPetReproduce(petArr, position, newPosition, config);
    }
  });
}
