
export class Star {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        
        // Базовые параметры
        this.baseSize = Math.random() * 1.5 + 0.5; // Размер от 0.5 до 2px
        this.baseAlpha = Math.random() * 0.6 + 0.4; // Базовая яркость
        
        // Параметры мерцания
        this.twinkleSpeed = Math.random() * 0.03 + 0.01; // Скорость изменения
        this.twinkleOffset = Math.random() * Math.PI * 2; // Фаза (чтобы не мигали синхронно)
        this.currentAlpha = this.baseAlpha;

        this.speed = this.baseSize * 0.8; 
    }

    update(currentTime, deltaTime) {
        // Используем синус для плавного колебания яркости
        // time - текущее время в миллисекундах
        const twinkle = Math.sin(currentTime * this.twinkleSpeed + this.twinkleOffset);
        // Преобразуем синус (-1...1) в коэффициент (0.7...1.3)
        const factor = 1 + twinkle * 0.3; 
        
        this.currentAlpha = Math.max(0.1, Math.min(1, this.baseAlpha * factor));
        
        const speedMultiplier = deltaTime / 16;
        this.y += this.speed * speedMultiplier;
    }

    draw(ctx, canvasHeight) {

        if (this.y > canvasHeight) {
            this.y = -this.baseSize;
            this.x = Math.random() * ctx.canvas.width;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${this.currentAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.baseSize, 0, Math.PI * 2);
        ctx.fill();
    }
}