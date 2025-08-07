export class Ball {
    constructor(x, y) {
        this.x = x,
        this.y = y,
        this.speedX = 8,
        this.speedY = 8,
        this.radius = 
            Math.PI * 2
    }


    draw(ctx) {
        ctx.beginPath()

        ctx.fillStyle = 'rgba(33, 202, 165, 1)'
        ctx.arc(this.x, this.y, 20, 0, this.radius, false);
        ctx.fill()
        this.x += this.speedX
        this.y += this.speedY

        ctx.closePath()
    }

    collisions(canvas) {
        if (this.y + this.speedY < 0) {
            this.speedY = -this.speedY
        }

        if (this.y + this.speedY > canvas.height) {
            this.speedY = -this.speedY
        }

        if (this.x + this.speedX < 0) {
            this.speedX = -this.speedX
            return 2
        }

        if (this.x + this.speedX > canvas.width) {
            this.speedX = -this.speedX
            return 1
        }
    }
}