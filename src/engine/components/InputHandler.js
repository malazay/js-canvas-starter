export default class InputHandler {
  constructor(player) {
    this.player = player
    this.rightPressed = false
    this.leftPressed = false
    this.upPressed = false
    this.downPressed = false
    document.addEventListener('keydown', this.keyDownHandler, false)
    document.addEventListener('keyup', this.keyUpHandler, false)
  }

  keyDownHandler = (event) => {
    if (event.keyCode == 39) {
      this.rightPressed = true
      this.player.update(1, 0)
    }
    else if (event.keyCode == 37) {
      this.leftPressed = true
      this.player.update(-1, 0)
    }
    if (event.keyCode == 40) {
      this.downPressed = true
      this.player.update(0, 1)
    }
    else if (event.keyCode == 38) {
      this.upPressed = true
      this.player.update(0, -1)
    }
  }

  keyUpHandler = (event) => {
    if (event.keyCode == 39) {
      this.rightPressed = false
    }
    else if (event.keyCode == 37) {
      this.leftPressed = false
    }
    if (event.keyCode == 40) {
      this.downPressed = false
    }
    else if (event.keyCode == 38) {
      this.upPressed = false
    }
  }

}