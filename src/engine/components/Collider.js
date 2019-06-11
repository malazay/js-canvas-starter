export default class Collider {
  constructor(engine, player) {
    this.engine = engine
    this.player = player
  }

  //Returns true if moving this.player 
  //To the indended coordinates would overlap
  //With a game object with a colliding tag
  //collisionTags are defined in Engine.js 
  willColide = (x, y) => {
    const { gameObjects, collisionTags } = this.engine
    const intendedCoordinates = {
      x: this.player.x + x,
      y: this.player.y + y
    }

    //If an object exists in the intended coordinates it will be returned
    const objInCoords = gameObjects.find(obj => {
      return obj.x === intendedCoordinates.x &&
        obj.y === intendedCoordinates.y
    })

    //If the objInCoords is not null and it's tag is included in
    //the list of collisionTags, if will return true
    if (objInCoords &&
      objInCoords.tag &&
      collisionTags.includes(objInCoords.tag))
      return true
    return false
  }
}