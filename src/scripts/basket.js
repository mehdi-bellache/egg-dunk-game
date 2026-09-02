import Mobile from "./mobile.js";

import basketImgSrc from "./assets/images/basket.png";

export default class Basket extends Mobile {
  #moving;
  #life;

  constructor(x, y) {
    super(x, y, 0, 0, basketImgSrc);
    this.#moving = null;
    this.#life = 3;
  }

  get moving() {
    return this.#moving;
  }

  get life() {
    return this.#life;
  }

  setMoving(value) {
    this.#moving = value;
  }

  setLife(value) {
    this.#life = value;
  }

  decrementLife() {
    this.#life -= 1;
  }

  moveUp() {
    this.setDeltaY(-10);
  }

  moveDown() {
    this.setDeltaY(+10);
  }

  moveLeft() {
    this.setDeltaX(-10);
  }

  moveRight() {
    this.setDeltaX(+10);
  }

  stopMoving() {
    this.setDeltaX(0);
    this.setDeltaY(0);
  }

  move(box) {
    this.setX(
      Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX)),
    );

    this.setY(
      Math.max(0, Math.min(box.height - this.height, this.y + this.deltaY)),
    );
  }

  manageLives() {
    const life1 = document.getElementById("life-1");
    const life2 = document.getElementById("life-2");
    const life3 = document.getElementById("life-3");

    life1.style.visibility = this.#life >= 1 ? "visible" : "hidden";
    life2.style.visibility = this.#life >= 2 ? "visible" : "hidden";
    life3.style.visibility = this.#life >= 3 ? "visible" : "hidden";
  }
}
