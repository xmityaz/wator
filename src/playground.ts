import * as PIXI from 'pixi.js';
import {Pet, isFish, PetMap, parsePosition, Config} from './logic';

export const BRICK_SIZE = {WIDTH: 5, HEIGHT: 5};

export class Playground {
  private graphics: PIXI.Graphics;

  private drawRectangleOnTetrisGrid = (x = 0, y = 0, color = 0x0000ff) => {
    this.graphics.lineStyle(0, color, 1);
    this.graphics.beginFill(color, 1);
    this.graphics.drawRect(x * BRICK_SIZE.WIDTH, y * BRICK_SIZE.HEIGHT, BRICK_SIZE.WIDTH, BRICK_SIZE.HEIGHT);
    this.graphics.endFill();
  };

  container: PIXI.Container;

  constructor(config: Config) {
    this.container = new PIXI.Container();
    this.graphics = new PIXI.Graphics();

    this.container.width = config.boardSize.width * BRICK_SIZE.WIDTH;
    this.container.height = config.boardSize.height * BRICK_SIZE.HEIGHT;
    this.container.addChild(this.graphics);
  }

  clear = () => {
    this.graphics.clear();
  };

  drawPetMap = (petMap: PetMap) => {
    this.clear();
    const positions = Object.keys(petMap);

    positions.forEach(position => {
      const pos = parsePosition(position);
      this.drawPet(petMap[position], pos.x, pos.y);
    });
  };

  private drawPet = (pet: Pet, x: number, y: number) => {
    const color = isFish(pet) ? 0x0000ff : 0xff0000;
    this.drawRectangleOnTetrisGrid(x, y, color);
  };
}
