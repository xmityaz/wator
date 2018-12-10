import {Config} from './game';

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

export function parsePosition(pos: string): {x: number; y: number} {
  const [x, y] = pos.split(',').map(val => Number(val));
  return {x, y};
}

function getRandomEl(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getNeighbourPositions(initX: number, initY: number, {boardSize}: Config): string[] {
  return [[initX + 1, initY], [initX - 1, initY], [initX, initY + 1], [initX, initY - 1]].map(([x, y]) => {
    if (x < 0) {
      return `${boardSize.width - 1},${y}`;
    } else if (x >= boardSize.width) {
      return `0,${y}`;
    } else if (y < 0) {
      return `${x},${boardSize.height - 1}`;
    } else if (y >= boardSize.height) {
      return `${x},0`;
    }
    return `${x},${y}`;
  });
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

function processFishMove(petMap: PetMap, position: string, config: Config): string {
  const {x: fishX, y: fishY} = parsePosition(position);
  const availablePositions = getNeighbourPositions(fishX, fishY, config).filter(
    position => !petMap[position]
  );

  return moveToRandomPosition(availablePositions, petMap, position);
}

function processPetReproduce(
  petMap: PetMap,
  positionToThrowCaviarIn: string,
  position: string,
  reproduce: () => Fish | Shark,
  {evolutionParams}: Config
) {
  const pet = petMap[position];
  const reproducingRate = isFish(pet)
    ? evolutionParams.fishReproducingRate
    : evolutionParams.sharkReproducingRate;

  if (pet.cyclesSinceReproduce >= reproducingRate && positionToThrowCaviarIn !== position) {
    petMap[positionToThrowCaviarIn] = reproduce();
    pet.cyclesSinceReproduce = 0;
  }
}

function processSharkMove(petMap: PetMap, position: string, config: Config): string | null {
  const shark = petMap[position] as Shark;
  const [sharkX, sharkY] = position.split(',').map(val => Number(val));

  const neighboarFishPositions = getNeighbourPositions(sharkX, sharkY, config).filter(
    (neighborPosition: string) => petMap[neighborPosition] && isFish(petMap[neighborPosition])
  );

  if (neighboarFishPositions.length > 0) {
    const newPosition = moveToRandomPosition(neighboarFishPositions, petMap, position);
    shark.energy = config.evolutionParams.sharkMaxEnergy;

    return newPosition;
  } else if (shark.energy === 0) {
    delete petMap[position];
    return null;
  }

  shark.energy--;
  return processFishMove(petMap, position, config);
}

export function initializePetMap({startParams, boardSize, evolutionParams}: Config) {
  const a = (counter: number, petMap: PetMap = {}): PetMap => {
    if (counter === 0) {
      return petMap;
    }

    const x = Math.floor(boardSize.width * Math.random());
    const y = Math.floor(boardSize.height * Math.random());
    const position = `${x},${y}`;

    if (petMap[position]) {
      return a(counter, petMap);
    }

    return a(counter - 1, {
      ...petMap,
      [position]:
        counter <= startParams.startSharkNumber
          ? {cyclesSinceReproduce: 0, energy: evolutionParams.sharkMaxEnergy}
          : {cyclesSinceReproduce: 0}
    });
  };

  return a(startParams.startFishNumber + startParams.startSharkNumber);
}

export function processDay(petMap: PetMap, config: Config) {
  const positions = Object.keys(petMap);
  const fishPositions = positions.filter(position => isFish(petMap[position]));
  const sharkPositions = positions.filter(position => !isFish(petMap[position]));

  fishPositions.forEach(position => {
    const newPosition = processFishMove(petMap, position, config);
    petMap[newPosition].cyclesSinceReproduce++;
    processPetReproduce(petMap, position, newPosition, () => ({cyclesSinceReproduce: 0}), config);
  });

  sharkPositions.forEach(position => {
    const newPosition = processSharkMove(petMap, position, config);
    if (newPosition) {
      petMap[newPosition].cyclesSinceReproduce++;
      processPetReproduce(
        petMap,
        position,
        newPosition,
        () => ({cyclesSinceReproduce: 0, energy: config.evolutionParams.sharkMaxEnergy}),
        config
      );
    }
  });
}
