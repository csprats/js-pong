import { Ball } from "./ball"
import { Paddle } from "./paddles"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const ball = new Ball(50, 50)
const paddle1 = new Paddle(50, canvas.height / 2 - 150, canvas)
const paddle2 = new Paddle(canvas.width - 100, canvas.height / 2 - 150, canvas)
let p1m = 0
let p2m = 0
let points1 = 0
let points2 = 0
const text1 = document.getElementById('1')
const text2 = document.getElementById('2')

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ball.draw(ctx)
  switch (ball.collisions(canvas)) {
    case 1:
      points1++
    break
    case 2:
      points2++
    break
  }

  paddle1.draw(ctx)
  paddle1.move(p1m)

  paddle2.draw(ctx)
  paddle2.move(p2m)


  if (ball.x + ball.speedX < paddle1.x + paddle1.width) {
    if (ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
        ball.speedX = -ball.speedX
    }
  }

  if (ball.x + ball.speedX > paddle2.x) {
    if (ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
        ball.speedX = -ball.speedX
    }
  }

  text1.textContent = `Player 1: ${points1}`
  text2.textContent = `Player 2: ${points2}`

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