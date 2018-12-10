import {isFish, PetMap} from './logic';
import {Config} from './game';

export const BRICK_SIZE = {WIDTH: 4, HEIGHT: 4};

export class Playground {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;

  private drawRect = (x = 0, y = 0, height: number, color = '#0000ff') => {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * BRICK_SIZE.WIDTH,
      y * BRICK_SIZE.HEIGHT,
      BRICK_SIZE.WIDTH,
      BRICK_SIZE.HEIGHT * height
    );
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

  drawPetMap = (petMap: PetMap, {boardSize}: Config) => {
    this.clear();

    for (let x = 0; x < boardSize.width; x++) {
      let activeShape: {y: number; height: number; type?: string} = {y: 0, type: undefined, height: 0};
      
      for (let y = 0; y < boardSize.height; y++) {

        const pet = petMap[`${x},${y}`];
        const type = pet ? (isFish(pet) ? 'fish' : 'shark') : undefined;

        if (type === activeShape.type) {
          activeShape.height++;
        } else {
          if (activeShape.type) {
            const color = activeShape.type === 'fish' ? '#0000ff' : '#ff0000';
            this.drawRect(x, activeShape.y, activeShape.height, color);
          }

          activeShape = {type, y, height: 1};
        }
      }

      if (activeShape.type) {
        const color = activeShape.type === 'fish' ? '#0000ff' : '#ff0000';
        this.drawRect(x, activeShape.y, activeShape.height, color);
      }
    }
  };
}
