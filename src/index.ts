import type { Ball, Brick } from "./type";
import { Observable, animationFrameScheduler, interval, fromEvent, merge } from "rxjs";

import { scan, map } from "rxjs/operators";
import { BALL_RADIUS, BRICK_GAP, PADDLE_CONTROLS, PADDLE_HEIGHT, PADDLE_WIDTH, TICKER_INTERVAL } from "./var";

const Height = window.innerHeight - 40;
const Width = window.innerWidth - 8;
const stage = document.querySelector("#stage")! as HTMLCanvasElement;
stage.height = Height;
stage.width = Width;
const context = stage.getContext("2d")!;
context.fillStyle = "green";

function drawInto() {
  context.clearRect(0, 0, stage.width, stage.height);
  context.textAlign = "center";
  context.font = "22px Courier New";
  context.fillText(
    "Press [←] and [→] to Start!",
    stage.width / 2,
    stage.height / 2
  );
}

function drawGameOver(text: string) {
  context.clearRect(
    stage.width / 4,
    stage.height / 3,
    stage.width / 2,
    stage.height / 3
  );
  context.textAlign = "center";
  context.font = "24px Courier New";
  context.fillText(text, stage.width / 2, stage.height / 2);
}

function drawScore(score: string | number) {
  context.textAlign = "left";
  context.font = "16px Courier New";
  context.fillText(`Score: ${score}`, BRICK_GAP, 18);
}

function drawPaddle(position: number) {
  context.beginPath();
  context.rect(
    position - PADDLE_WIDTH / 2,
    context.canvas.height - PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
  context.fill();
  context.closePath();
}

function drawBall(ball: Ball) {
  context.beginPath();
  context.arc(ball.position.x, ball.position.y, BALL_RADIUS, 0, Math.PI * 2);
  context.fill();
  context.closePath();
}

function drawBrick(brick: Brick) {
  context.beginPath();
  context.rect(
    brick.x - brick.width / 2,
    brick.y - brick.height / 2,
    brick.width,
    brick.height
  );
  context.fill();
  context.closePath();
}

function drawBricks(bricks: Brick[]) {
  bricks.forEach((brick) => {
    drawBrick(brick);
  });
}


// const ticker$ = interval(TICKER_INTERVAL, animationFrameScheduler);
// const key$ = merge(fromEvent(document, 'keydown').map((event) => (PADDLE_CONTROLS[event.key] || 0))
// const key$ = fromEvent(document, 'keydown').pipe(
//   map((event) => (PADDLE_CONTROLS[event.key] || 0)
//   );
//     .map(() => {
//       return {
//         time: Date.now(),
//         deltaTime: null
//       }
//     })
//     .scan(() => { })


(function () {
  drawInto();
  drawScore(100);
  drawPaddle(Width / 2);
})();
