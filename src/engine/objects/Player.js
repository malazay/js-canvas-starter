import GameObject from "../GameObject";
import InputHandler from "../components/InputHandler";
import Collider from "../components/Collider";

export default class Player extends GameObject {
  constructor(engine, x, y, color, sprite, animation) {
    super(engine, x, y, color, sprite, animation, 'player')
    this.inputHandler = new InputHandler(this)
    this.collider = new Collider(this.engine, this)
  }

  update = (x, y) => {
    if (!this.collider.willColide(x, y)) {
      this.x += x
      this.y += y
    }
  }
}