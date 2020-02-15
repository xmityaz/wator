import {Config} from './Ocean.types';

type Fish = {
  cyclesSinceReproduce: number;
};

type Shark = {
  cyclesSinceReproduce: number;
  energy: number;
};

export type Pet = Fish | Shark;

export type PetMap = {[position: string]: Pet}; // {['0,1': {cyclesSinceReproduce: 2}]}

export function isFish(pet: Pet) {
  return typeof (pet as Shark).energy === 'undefined';
}

function getRandomEl(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function moveToRandomPosition(positions: string[], petMap: PetMap, currentPosition: string): string {
  if (positions.length > 0) {
    const newPosition = getRandomEl(positions);
    petMap[newPosition] = petMap[currentPosition];
    delete petMap[currentPosition];

    return newPosition;
  }

  return currentPosition;
}

function processFishMove(petMap: PetMap, position: string, {boardSize}: Config): string {
  const zptI = position.indexOf(',');
  const x = Number(position.slice(0, zptI));
  const y = Number(position.slice(zptI + 1, position.length));

  const west = x <= 0 ? `${boardSize.width - 1},${y}` : `${x - 1},${y}`;
  const east = x >= boardSize.width ? `0,${y}` : `${x + 1},${y}`;
  const south = y <= 0 ? `${x},${boardSize.height - 1}` : `${x},${y - 1}`;
  const north = y >= boardSize.height ? `${x},0` : `${x},${y + 1}`;
  const positions = [];

  if (!petMap[west]) {
    positions.push(west);
  }
  if (!petMap[east]) {
    positions.push(east);
  }
  if (!petMap[south]) {
    positions.push(south);
  }
  if (!petMap[north]) {
    positions.push(north);
  }

  if (positions.length > 0) {
    const newPosition = getRandomEl(positions);
    petMap[newPosition] = petMap[position];
    delete petMap[position];

    return newPosition;
  }

  return position;
}

function processPetReproduce(
  petMap: PetMap,
  positionToThrowCaviarIn: string,
  position: string,
  {evolutionParams}: Config
) {
  const pet = petMap[position];
  const petIsFish = isFish(pet);
  const reproducingRate = isFish(pet)
    ? evolutionParams.fishReproducingRate
    : evolutionParams.sharkReproducingRate;

  if (pet.cyclesSinceReproduce >= reproducingRate && positionToThrowCaviarIn !== position) {
    petMap[positionToThrowCaviarIn] = petIsFish
      ? {cyclesSinceReproduce: 0}
      : {cyclesSinceReproduce: 0, energy: evolutionParams.sharkMaxEnergy};

    pet.cyclesSinceReproduce = 0;
  }
}

function processSharkMove(petMap: PetMap, position: string, config: Config): string | null {
  const shark = petMap[position] as Shark;

  const zptI = position.indexOf(',');
  const x = Number(position.slice(0, zptI));
  const y = Number(position.slice(zptI + 1, position.length));

  const west = x <= 0 ? `${config.boardSize.width - 1},${y}` : `${x - 1},${y}`;
  const east = x >= config.boardSize.width ? `0,${y}` : `${x + 1},${y}`;
  const south = y <= 0 ? `${x},${config.boardSize.height - 1}` : `${x},${y - 1}`;
  const north = y >= config.boardSize.height ? `${x},0` : `${x},${y + 1}`;
  const neighbourFishPositions = [];

  if (petMap[west] && isFish(petMap[west])) {
    neighbourFishPositions.push(west);
  }
  if (petMap[east] && isFish(petMap[east])) {
    neighbourFishPositions.push(east);
  }
  if (petMap[south] && isFish(petMap[south])) {
    neighbourFishPositions.push(south);
  }
  if (petMap[north] && isFish(petMap[north])) {
    neighbourFishPositions.push(north);
  }

  if (neighbourFishPositions.length > 0) {
    const newPosition = moveToRandomPosition(neighbourFishPositions, petMap, position);
    shark.energy = config.evolutionParams.sharkMaxEnergy;

    return newPosition;
  } else if (shark.energy > config.evolutionParams.sharkMaxEnergy) {
    shark.energy = config.evolutionParams.sharkMaxEnergy;
  } else if (shark.energy === 0) {
    delete petMap[position];
    return null;
  }

  shark.energy--;
  return processFishMove(petMap, position, config);
}

export function initializePetMap({startParams, boardSize, evolutionParams}: Config) {
  const petMap: PetMap = {};
  const animalLength = startParams.startFishNumber + startParams.startSharkNumber;
  let counter = 0;

  while (counter < animalLength) {
    const x = Math.floor(boardSize.width * Math.random());
    const y = Math.floor(boardSize.height * Math.random());
    const position = `${x},${y}`;

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

export function processDay(petMap: PetMap, config: Config) {
  const positions = Object.keys(petMap);
  const fishPositions: string[] = []; // positions.filter(position => isFish(petMap[position]));
  const sharkPositions: string[] = []; // positions.filter(position => !isFish(petMap[position]));

  positions.forEach(position => {
    isFish(petMap[position]) ? fishPositions.push(position) : sharkPositions.push(position);
  });

  fishPositions.forEach(position => {
    const newPosition = processFishMove(petMap, position, config);
    petMap[newPosition].cyclesSinceReproduce++;
    processPetReproduce(petMap, position, newPosition, config);
  });

  sharkPositions.forEach(position => {
    const newPosition = processSharkMove(petMap, position, config);
    if (newPosition) {
      petMap[newPosition].cyclesSinceReproduce++;
      processPetReproduce(petMap, position, newPosition, config);
    }
  });
}
