export class Paddle {
    constructor(x, y, n, canvas) {
        this.x = x,
        this.y = y,
        this.speedX = 1,
        this.speedY = 1,
        this.width = 50,
        this.height = 150,
        this.n = n,
        this.canvas = canvas
    }

    draw(ctx) {
        ctx.beginPath()

        ctx.fillStyle = 'rgba(26, 143, 118, 1)'
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()

        ctx.closePath()
    }

    move(direction) {
        this.y += 7 * direction
        
        if (this.y < 0) {
            this.y = 0
        }
        else if (this.y + this.height > this.canvas.height) {
            this.y = this.canvas.height - this.height
        }
    }
}