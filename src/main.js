import Engine from "./engine/Engine";
import './styles/game.css';

const engine = new Engine();

//Create canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.append(canvas)

document.getElementById('title').innerText = 'Javascript/Canvas Game Starter ';