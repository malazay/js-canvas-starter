import { WIDTH, HEIGHT } from "../constants/GAME";

export default class Engine {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.append(this.canvas)
    this.canvas.width = WIDTH
    this.canvas.height = HEIGHT
    this.gameObjects = []
    this.floor = [] //Floor elements won't be taken in account for any calculations (no collisions for intance)
    this.collisionTags = ['wall']
    this.player
    window.requestAnimationFrame(this.draw)
  }

  addPlayer = (player) => {
    if (!this.player) {
      this.player = player;
    } else {
      throw ("Error: Player was already added")
    }
  }

  addGameObject = (gameObject) => {
    this.gameObjects.push(gameObject)
  }

  removeGameObject = (gameObject) => {
    this.gameObjects = this.gameObjects.filter(obj => obj !== gameObject)
  }

  addCollisionTag = (tag) => {
    this.collisionTags.push(tag);
  }

  removeCollisionTag = (tag) => {
    this.collisionTags = this.collisionTags.filter(tagObj => tagObj !== tag);
  }

  update = () => {
    this.gameObjects.forEach(obj => obj.update())
    this.player.update()
  }

  draw = () => {    
    //Clear the whole canvas on each frame
    //Without this each time you move a game object it will 
    //be duplicated instead
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw every floor tile
    //Tiles are not considered for collisions to avoid unnecessary 
    //computing power
    this.floor.forEach(tile => tile.draw());

    //Draw every game object
    this.gameObjects.forEach(obj => obj.draw())
    
    //Draws the player at the very end of the draw function so it's not overlapped
    //by any other element
    this.player.draw()

    //loop
    window.requestAnimationFrame(this.draw)
  }
}