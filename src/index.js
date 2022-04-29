let canvas;
let ctx;

const RIGHT_CLICK = 2;
const MOUSE_WHEEL = 1;
const LEFT_CLICK = 0;

export default class Game {
  shapes = [];
  fps = 60;
  startTime;
  now;
  then;
  elapsed;


  init(_canvas) {
    canvas = _canvas;
    ctx = canvas.getContext('2d');
    this.start()
  }

  start() {
    this.addShapeOnRightClick();
    this.removeShapeOnLeftClick();
    this.animate();
  }

  addShapeOnRightClick() {
    canvas.addEventListener('mousedown', e => {
      if(e.button === LEFT_CLICK ) {
        this.shapes.push(new Rectangle({ x: e.x, y: e.y }));
      }
    })
  }

  removeShapeOnLeftClick() {
    canvas.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    canvas.addEventListener('mousedown', e => {
      if(e.button === RIGHT_CLICK ) {
        this.shapes = [];
      }
    })
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.clearScreen();
    this.drawShapes();
  }

  clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  drawShapes() {
    this.shapes.forEach(shape => {
      shape.draw();
    })
  }
}


class Rectangle {
  x = 0;
  y = 0;
  width = 100;
  height = 100;
  currentColor = 0;
  speed = 1;
  colors = ['red', 'green', 'blue', 'black']

  constructor({x, y}) {
    this.x = x;
    this.y = y;

    this.jumpOnMouseWheelPress();
  }

  jumpOnMouseWheelPress() {
    canvas.addEventListener('mousedown', (e) => {
      if(e.button === MOUSE_WHEEL) {
        if(this.clickInMe(e.clientX, e.clientY)) {
          this.jump()
        }
      }
    })
  }

  clickInMe(clickX, clickY) {
    return clickX < (this.x + this.width) && clickX > this.x && clickY < (this.y + this.height) && clickY > this.y;
  }

  jump() {
    this.speed = -10;
  }

  draw() {
    this.animate();
    ctx.fillStyle = this.colors[this.currentColor];
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  animate() {
    this.followGravity();
    this.floorCollision();
  }

  followGravity() {
    this.speed = this.speed + 9/30;
    this.y = this.y + this.speed;
  }

  floorCollision() {
    if(this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  }
}
