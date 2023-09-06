
import { BRICK_GAP, PADDLE_HEIGHT } from './var'
const Height = window.innerHeight
const Width = window.innerWidth
const stage = document.querySelector("#stage")! as HTMLCanvasElement
stage.height = Height
stage.width = Width
const context = stage.getContext("2d")!

context.fillStyle = 'green'

function drawInto() {
  context.clearRect(0, 0, stage.width, stage.height)
  context.textAlign = "center"
  context.font = "24px Courier New"
  context.fillText('Press [←] and [→] to Start!', stage.width / 2, stage.height / 2)
}

function drawGameOver(text: string) {
  context.clearRect(stage.width / 4, stage.height / 3, stage.width / 2, stage.height / 3)
  context.textAlign = "center"
  context.font = "24px Courier New"
  context.fillText(text, stage.width / 2, stage.height / 2)
}

function drawScore(score: string | number) {
  context.textAlign = 'left'
  context.font = "16px Courier New"
  context.fillText(`Score: ${score}`, BRICK_GAP, 18)
}

(function init() {
  drawInto()
  drawScore(100)
})()
