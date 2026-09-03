import Basket from "./basket";
import Egg from "./egg";
import Rocket from "./rocket";

// je doit faire la documentation.
export default class Game {
  #canvas;
  #context;
  #player;
  #eggs;
  #rockets;
  #eggTimer;
  #rocketTimer;
  #requeteAnimation;
  #score;
  #isGameOver;

  constructor(canvas) {
    this.#canvas = canvas;
    this.#context = this.#canvas.getContext("2d");
    this.#player = new Basket(this.#canvas.width / 2, this.#canvas.height / 2);
    this.#eggs = [];
    this.#rockets = [];
    this.#eggTimer = null;
    this.#rocketTimer = null;
    this.#requeteAnimation = null;
    this.#score = 0;
    this.#isGameOver = false;
  }

  /** donne accès au canvas correspondant à la zone de jeu */
  get canvas() {
    return this.#canvas;
  }

  get context() {
    return this.#context;
  }

  get player() {
    return this.#player;
  }

  get eggTimer() {
    return this.#eggTimer;
  }

  get rocketTimer() {
    return this.#rocketTimer;
  }

  get requestAnimation() {
    return this.#requeteAnimation;
  }

  get score() {
    return this.#score;
  }

  incrementScore(value) {
    this.#score += value;
  }

  updateScore(value) {
    this.incrementScore(value);
    document.getElementById("score").textContent = this.#score;
  }

  keyDownActionHandler(event) {
    switch (event.key) {
      case "ArrowLeft":
      case "Left":
        this.#player.setMoving("left");
        break;
      case "ArrowRight":
      case "Right":
        this.#player.setMoving("right");
        break;
      case "ArrowUp":
      case "Up":
        this.#player.setMoving("up");
        break;
      case "ArrowDown":
      case "Down":
        this.#player.setMoving("down");
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  keyUpActionHandler(event) {
    switch (event.key) {
      case "ArrowLeft":
      case "Left":
        this.#player.setMoving(null);
        this.#player.stopMoving();
        break;
      case "ArrowRight":
      case "Right":
        this.#player.setMoving(null);
        this.#player.stopMoving();
        break;
      case "ArrowUp":
      case "Up":
        this.#player.setMoving(null);
        this.#player.stopMoving();
        break;
      case "ArrowDown":
      case "Down":
        this.#player.setMoving(null);
        this.#player.stopMoving();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  // on fait else if c'est mieux non ?
  handleMoveKeys() {
    if (this.#player.moving === "left") this.#player.moveLeft();
    if (this.#player.moving === "right") this.#player.moveRight();
    if (this.#player.moving === "up") this.#player.moveUp();
    if (this.#player.moving === "down") this.#player.moveDown();
  }

  alea(n) {
    return Math.floor(Math.random() * n);
  }

  addEgg() {
    const x = this.alea(this.#canvas.width - this.#player.width);
    this.#eggs.push(new Egg(x, 0));
  }

  addRocket() {
    const heightEdge = 45;
    const y = this.alea(this.#canvas.height - this.#player.height);
    const rocket = new Rocket(0, y);
    if (rocket.deltaX == -6) {
      rocket.setX(this.#canvas.width);
    }
    this.#rockets.push(rocket);
  }

  startEggTimer() {
    if (this.#eggTimer === null) {
      this.#eggTimer = setInterval(() => {
        const n = Math.random();
        if (n < 0.75) {
          this.addEgg();
        }
      }, 1000);
    }
  }

  startRocketTimer() {
    if (this.#rocketTimer === null) {
      this.#rocketTimer = setInterval(() => {
        const n = Math.random();
        if (n < 0.5) {
          this.addRocket();
        }
      }, 1000);
    }
  }

  restartGame() {
    this.#isGameOver = false;

    cancelAnimationFrame(this.#requeteAnimation);
    clearInterval(this.#eggTimer);
    clearInterval(this.#rocketTimer);
    this.#requeteAnimation = null;
    this.#eggTimer = null;
    this.#rocketTimer = null;

    this.#eggs = [];
    this.#rockets = [];

    this.#player = new Basket(this.#canvas.width / 2, this.#canvas.height / 2);
    this.#player.manageLives();

    this.#score = 0;
    document.getElementById("score").textContent = 0;

    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  handleEggs() {
    this.#eggs.forEach((egg) => egg.move(this.#canvas));

    this.#eggs.forEach((egg) => {
      if (egg.collisionWith(this.#player)) {
        this.updateScore(100);
      }
    });

    const newEggs = this.#eggs.filter(
      (egg) =>
        !egg.collisionWith(this.#player) &&
        !this.#rockets.some((rocket) => egg.collisionWith(rocket)) &&
        egg.y <= this.#canvas.height,
    );
    this.#eggs = newEggs;

    this.#eggs.forEach((egg) => egg.draw(this.#context));
  }

  handleRockets() {
    this.#rockets.forEach((rocket) => rocket.move(this.#canvas));

    this.#rockets.forEach((rocket) => {
      if (rocket.collisionWith(this.#player)) {
        this.updateScore(-500);
        this.#player.decrementLife(1);
        this.#player.manageLives();
      }
    });

    const newRockets = this.#rockets.filter(
      (rocket) =>
        !rocket.collisionWith(this.#player) &&
        rocket.x <= this.#canvas.width &&
        rocket.y >= 0,
    );

    this.#rockets = newRockets;

    this.#rockets.forEach((rocket) => rocket.draw(this.#context));
  }

  triggerGameOver() {
    if (this.#isGameOver) return;

    this.#isGameOver = true;

    this.#player.manageLives();
    this.#player.draw(this.#context);

    window.cancelAnimationFrame(this.#requeteAnimation);

    setTimeout(() => {
      alert("Game Over !");
      this.restartGame();
    }, 50);
    return;
  }

  handlePlayer() {
    if (this.#player.life <= 0) {
      this.triggerGameOver();
    }
    this.#player.move(this.#canvas);
    this.#player.draw(this.#context);
  }

  animate = () => {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

    this.handleMoveKeys();

    this.handleEggs();
    this.handleRockets();
    this.handlePlayer();

    this.#requeteAnimation = window.requestAnimationFrame(this.animate);
  };

  /* start the animation or stop it if previously running */
  startAndStop() {
    if (this.#requeteAnimation === null) {
      this.startEggTimer();
      this.startRocketTimer();
      this.#requeteAnimation = window.requestAnimationFrame(this.animate);
    } else {
      window.cancelAnimationFrame(this.#requeteAnimation);
      this.#requeteAnimation = null;
      clearInterval(this.#eggTimer);
      clearInterval(this.#rocketTimer);
      this.#rocketTimer = null;
      this.#eggTimer = null;
    }
  }
}
