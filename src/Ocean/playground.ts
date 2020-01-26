import {isFish, PetMap} from './logic';
import {Config, Size} from './Ocean.types';

const fishBase64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABBUlEQVRIS+2UuxHCMAyGpSoFk7AALQUtRcZgCuZgixRMkBGosghNKnF+yNiO35dzFTW5JL/1Wb9sIXQI7MCAA0La5iInikRe34he6gs+1CPX16xAJ+CdQyFA6E1uH2Lb8E88D8HN4nUNVUI0D2D/syF0n0Z4jxMgIghhLgIQCYBldax0IERq8wayrADnNEyD5DoGiDWxSqTOiLmMApCpmLXJSmIWNYBCldD3dpEbOj0/21bsBJEuBUENgFjjmwG1jd82PXeGxUl070r2CHNKJbRDWOaFHinVl9FO44DYEh4pLEzMruRYcUDWC19aMxxlCTsPyBw82b3SKVxwBOKSA1JlXxe7fkbZeRqVRmsFAAAAAElFTkSuQmCC';
const sharkBase64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABI0lEQVRIS92VsRHCMAxF444FoIRRYBkYCpaBUaCEBejMycn3yUaS5RQ5jjQJVuSnL/2YMCxwhQUYw89AoqHWKhJ5oaUkro9XlfG6HCjG98gFUR7iZiUcQAlIrNcn0FdBLYipoJaGAqR1KkBS0gXAxu/HfVhtdwVHUzILoIFMCAVjHGe4Od3UwT/P+xQLIaR51WokSFYxBRPIgqAYQAgIEHdeYT+4BhBKclg4qcF73RALgB6iIA/E89EVs3EozF3CgwjhbYMRMGgQJVh9EqgQPnwabA2h37Quzc0F4QBUjk35natSjprR4pPsol3cmpICtAoKuYUp5lbC28GfaRMpNluJNGTJDLOVcL8aDsqveZSkLqiHVH+gON1b/4z92wsZ/wP5APhM3xrh3vlOAAAAAElFTkSuQmCC';

export class Playground {
  private ctx: CanvasRenderingContext2D;

  private fishImg: CanvasImageSource;
  private sharkImg: CanvasImageSource;

  private fishColor = '#ffc107';
  private sharkColor = '#1565c0';

  private drawPetImg = (x = 0, y = 0, brickSize: Size, petImg: CanvasImageSource) => {
    this.ctx.drawImage(petImg, x * brickSize.width, y * brickSize.height, brickSize.width, brickSize.height);
  };

  private drawRect = (x = 0, y = 0, brickSize: Size, height: number, color = '#0000ff') => {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * brickSize.width, y * brickSize.height, brickSize.width, brickSize.height * height);
  };

  constructor({boardSize, brickSize}: Config, private canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.width = boardSize.width * brickSize.width;
    this.canvas.height = boardSize.height * brickSize.height;

    this.fishImg = new Image();
    this.fishImg.src = fishBase64;

    this.sharkImg = new Image();
    this.sharkImg.src = sharkBase64;
  }

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  drawRectPetMap = (petMap: PetMap, {boardSize, brickSize}: Config) => {
    this.clear();

    for (let x = 0; x < boardSize.width; x++) {
      let activeShape: {y: number; height: number; type?: string} = {
        y: 0,
        type: undefined,
        height: 0
      };

      for (let y = 0; y < boardSize.height; y++) {
        const pet = petMap[`${x},${y}`];
        const type = pet ? (isFish(pet) ? 'fish' : 'shark') : undefined;

        if (type === activeShape.type) {
          activeShape.height++;
        } else {
          if (activeShape.type) {
            const color = activeShape.type === 'fish' ? this.fishColor : this.sharkColor;
            this.drawRect(x, activeShape.y, brickSize, activeShape.height, color);
          }

          activeShape = {type, y, height: 1};
        }
      }

      if (activeShape.type) {
        const color = activeShape.type === 'fish' ? this.fishColor : this.sharkColor;
        this.drawRect(x, activeShape.y, brickSize, activeShape.height, color);
      }
    }
  };

  drawPetMap = (petMap: PetMap, {boardSize, brickSize}: Config) => {
    this.clear();

    for (let x = 0; x < boardSize.width; x++) {
      for (let y = 0; y < boardSize.height; y++) {
        const pet = petMap[`${x},${y}`];
        const type = pet ? (isFish(pet) ? 'fish' : 'shark') : undefined;

        if (type) {
          const petImg = type === 'fish' ? this.fishImg : this.sharkImg;
          this.drawPetImg(x, y, brickSize, petImg);
        }
      }
    }
  };
}
