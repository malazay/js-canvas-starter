import { TILESIZE } from '../constants/GAME'

export default class GameObject {
  constructor(engine, x, y, color=null, sprite=null, animation=null, tag='default') {
    this.engine = engine
    this.ctx = engine.ctx
    this.x = x
    this.y = y
    this.color = color
    this.sprite = sprite
    this.animation = animation
    this.tag = tag
  }

  update = (x, y) => {
    this.x += x
    this.y += y
  }

  draw = () => {
    const x = this.x * TILESIZE
    const y = this.y * TILESIZE
    if (this.color) {
      this.ctx.fillStyle = this.color
      this.ctx.fillRect(x, y, TILESIZE, TILESIZE)
    } else if (this.sprite) {
      //not defined yet
      return
    } else if (this.animation) {
      //not defined yet
      return
    } else {
      throw ('Error: At least color, sprite or animation should be provided')
    }
  }
}