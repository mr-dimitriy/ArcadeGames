
import { Star } from "./Stars.js";

export class Starfield {
    constructor(canvasWidth, canvasHeight) {
        this.stars = [];
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight
        this.updateTime = 100;
        this.lifetimeUpdate = 0;
    }

    createNewStars(starCount = 150){
        for (let i = 0; i < starCount; i++) {
            this.stars.push(new Star(this.canvasWidth, this.canvasHeight));
        }
    }

    update(deltaTime) {
        const currentTime = Date.now();

        for (const star of this.stars) {
            star.update(currentTime, deltaTime);
        }
    }

    draw(ctx) {
        for (const star of this.stars) {
            star.draw(ctx, this.canvasHeight);
        }
    }
}