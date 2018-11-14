import {Pet, isFish, PetMap, parsePosition} from './logic';
import {Config} from './game';

export const BRICK_SIZE = {WIDTH: 4, HEIGHT: 4};

export class Playground {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;

  private drawRectangleOnTetrisGrid = (x = 0, y = 0, color = '#0000ff') => {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * BRICK_SIZE.WIDTH, y * BRICK_SIZE.HEIGHT, BRICK_SIZE.WIDTH, BRICK_SIZE.HEIGHT);
  };

  constructor({boardSize}: Config) {
    this.canvas = document.getElementById('ocean') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = boardSize.width * BRICK_SIZE.WIDTH;
    this.canvas.height = boardSize.height * BRICK_SIZE.WIDTH;
  }

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    const color = isFish(pet) ? '#0000ff' : '#ff0000';
    this.drawRectangleOnTetrisGrid(x, y, color);
  };
}
