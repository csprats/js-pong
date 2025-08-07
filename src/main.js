import { Ball } from "./ball"
import { Paddle } from "./paddles"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const ball = new Ball(50, 50)
const paddle1 = new Paddle(50, canvas.height / 2 - 150, 1, canvas)
const paddle2 = new Paddle(canvas.width - 100, canvas.height / 2 - 150, 2, canvas)
let p1m = 0
let p2m = 0
let now = 0
let dt = 0
let last = 0

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ball.draw(ctx)
  ball.collisions(canvas)

  paddle1.draw(ctx)
  paddle1.move(p1m)

  paddle2.draw(ctx)
  paddle2.move(p2m)

  requestAnimationFrame(draw)
}

document.addEventListener('keydown', (e) => {
  if (e.key === 's') {
    p1m = 1
  }
  if (e.key === 'w') {
    p1m = -1
  }
  if (e.key === 'ArrowDown') {
    p2m = 1
  }
  if (e.key === 'ArrowUp') {
    p2m = -1
  }
})
document.addEventListener('keyup', (e) => {
  if (e.key === 's' || e.key === 'w') {
    p1m = 0
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    p2m = 0
  }
})

draw()