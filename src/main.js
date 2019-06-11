import Engine from './engine/Engine'
import './styles/game.css'
import Player from './engine/objects/Player'
import GameObject from './engine/GameObject'

const x = 0
const y = 0

const engine = new Engine()

const player = new Player(engine, x, y, 'red')
engine.addPlayer(player)

const wall = new GameObject(engine, 3, 3, 'grey', null, null, 'wall')
engine.addGameObject(wall)

engine.addCollisionTag('tree')

// the object tree contains a tag that is included in the list of collisionTag
// in the Engine class so it won't be possible to go 'trough' it
const tree = new GameObject(engine, 8, 1, 'green', null, null, 'tree')
engine.addGameObject(tree)

// the object path's tag is 'path' which is not included in the list of collisionTag
// So the player does not collide with it

const path = new GameObject(engine, 4, 2, '#E3CA27', null, null, 'path')
engine.addGameObject(path)
