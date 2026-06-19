import { GameObject } from "./GameObject.js";
import {Bullet} from "./Bullet.js"
import { gameConfig } from "../config.js";

class Creature extends GameObject{
    constructor(width, height, sizeX, sizeY){
        super(width, height, sizeX, sizeY);

        this.speed = 1;// Скорость движения (пикселей за кадр)
        this.dx = 5; // Изменение по X
        this.dy = 5; // Изменение по Y
    }

}


export class Player extends Creature{
    constructor(width, height, sizeX, sizeY, sprites){
        super(width, height, sizeX, sizeY);

        this.canvasWidth = width;
        this.canvasHeight = height;

        this.x = (width - this.sizeX) / 2; 
        this.y = (height - this.sizeY) - 20; 

        this.lastShotTime = 0; // Время последнего выстрела
        this.shootCooldown = 800;

        this.playerHealth = 3;
        this.weaponSpeedLevel = 1;
        this.weaponBulletCount = 1;

        this.sprites = sprites;
        this.currentDirection = 'idle';

        this.shield = null;

        this.updateWeaponStats();
    }

    
    moveRight(canvasWidth) {
        if (this.x + this.sizeX < canvasWidth) {
            this.x += this.dx * this.speed;
        }
    }
    
    moveLeft() {
        this.x -= this.dx * this.speed;
        if (this.x < 0) {
            this.x = 0;
        }
    }
    
    moveUp() {
        this.y -= this.dy * this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }
    
    moveDown(canvasHeight) {
        if (this.y + this.sizeY < canvasHeight) {
            this.y += this.dy * this.speed;
        }
    }

    canShoot() {
        const currentTime = Date.now();
        if (currentTime - this.lastShotTime >= this.shootCooldown) {
            this.lastShotTime = Date.now();
            return true; // Можно стрелять
        }
        return false; // Еще рано
    }

    createBullet(index) {
        const centerX = this.x + this.sizeX / 2;
        const bulletWidth = 10;
        const spacing = 15; // Расстояние между центрами пуль

        // Вычисляем смещение от центра
        const offset = (index - (this.weaponBulletCount - 1) / 2) * spacing;

        const bulletX = centerX + offset - bulletWidth / 2;
        const bulletY = this.y;

        return new Bullet(bulletX, bulletY);
    }

    updateWeaponStats() {
        switch (this.weaponSpeedLevel) {
            case 1: this.shootCooldown = 800; break;
            case 2: this.shootCooldown = 750; break;
            case 3: this.shootCooldown = 700; break;
            case 4: this.shootCooldown = 600; break;
            case 5: this.shootCooldown = 500; break;
            case 6: this.shootCooldown = 400; break;
            case 7: this.shootCooldown = 200; break;
        }

    }
    
    upgradeSpeedWeapon() {
        this.weaponSpeedLevel++;
        this.updateWeaponStats();
    }

    upgradeBulletCount() {
        this.weaponBulletCount++;
    }

    activateShield(duration, isStrong) {
        this.shield = {
            expiresAt: Date.now() + duration,
            isStrong: isStrong
        };
    }

    hasShield() {
        return this.shield && Date.now() < this.shield.expiresAt;
    }
    
    takeDamage() {
        if (this.hasShield()) {
            if (!this.shield.isStrong) {
                this.shield = null; // Обычный щит ломается
            }
            return false; // Урон не получен
        }
        
        this.playerHealth--;
        return this.playerHealth <= 0;
    }

    drawCooldownBar(ctx) {
        const player = this;
        const currentTime = Date.now();
        const timeSinceLastShot = currentTime - player.lastShotTime;
        
        // Прогресс от 0 до 1 (1 = готов к стрельбе)
        const progress = Math.min(timeSinceLastShot / player.shootCooldown, 1);
        
        const barWidth = player.sizeX;
        const barHeight = 5;
        const barX = player.x;
        const barY = player.y-5; // Над игроком
        
        // Фон полоски (серый)
        ctx.fillStyle = '#333';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        // Заполненная часть (зеленый, когда готов)
        ctx.fillStyle = progress >= 1 ? '#00ff00' : '#ffff00';
        ctx.fillRect(barX, barY, barWidth * progress, barHeight);
    }

    drawHealthfBar(ctx) {
        const player = this;

        const barWidth = player.sizeX;
        const barHeight = 5;
        const barX = player.x;
        const barY = player.y + player.sizeY + 5; // Под игроком

        // Фон полоски (серый)
        ctx.fillStyle = '#333';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        switch(this.playerHealth){
            case(0):
                ctx.fillStyle = '#333';
                break;
            case(1):
                ctx.fillStyle =  '#af0202ff';
                break;
            case(2):
                ctx.fillStyle =  '#ffff00';
                break;
            case(3):
                ctx.fillStyle =  '#00ff00';
                break;
        }
        ctx.fillRect(barX, barY, barWidth * (this.playerHealth/3), barHeight);
    }

    drawShield(ctx){
        // Рисуем щит если активен
        if (this.hasShield()) {
            ctx.strokeStyle = this.shield.isStrong ? '#8800ff' : '#00ffff';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(
                this.x + this.sizeX / 2,
                this.y + this.sizeY / 2,
                this.sizeX / 2 + 5,
                0,
                Math.PI * 2
            );
            ctx.stroke();
        }
    }

    draw(ctx) {
        const sprite = this.sprites[this.currentDirection];
        
        // Проверяем, что картинка загружена
        if (sprite && sprite.complete) {
            ctx.drawImage(sprite, this.x, this.y, this.sizeX, this.sizeY);

            this.drawCooldownBar(ctx);
            this.drawHealthfBar(ctx);
            this.drawShield(ctx);
        }
    }
}

export class Enemy extends Creature{
    constructor(width, height, enemyType, spriteID, spriteSheets){
        super(width, height);

        this.typeName = enemyType.name;
        this.dx = 3;
        this.dy = enemyType.dy;
        this.speed = enemyType.speed;
        this.costPoint = enemyType.points;
        this.enemyHealth = enemyType.health;
        this.enemyMaxHealth = enemyType.health;
        
        this.spriteSheet = spriteSheets;
        this.spriteData = enemyType.sprites[spriteID];
        this.sizeX = this.spriteData.swidth;
        this.sizeY = this.spriteData.sheight;

        this.x = Math.random() * (width - this.sizeX); 
        this.y = -this.sizeY; 
        
        if (this.spriteSheet.complete) {
            this.isLoaded = true;
        } else {
            this.isLoaded = false;
            this.spriteSheet.onload = () => {
                this.isLoaded = true;
            };
        }
    }
    
    takeDamage() {
        this.enemyHealth--;
        return this.enemyHealth <= 0; // Возвращает true, если враг умер
    }

    draw(ctx) {
        if (this.isLoaded) {
            // Используем 9-аргументный drawImage для вырезания части спрайт-листа
            ctx.drawImage(
                this.spriteSheet,
                this.spriteData.sx, this.spriteData.sy,
                this.spriteData.swidth, this.spriteData.sheight,
                this.x, this.y,
                this.sizeX, this.sizeY
            );
            this.drawHealthfBar(ctx);
        }
    }

    move(){
        this.y += this.dy * this.speed;
    }

    drawHealthfBar(ctx) {
        const enemy = this;

        const barWidth = enemy.sizeX;
        const barHeight = 5;
        const barX = enemy.x;
        const barY = enemy.y-5;; //Над врагом

        // Фон полоски (серый)
        ctx.fillStyle = '#333';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        

        // // Цвет в зависимости от типа
        // let healthColor = '#ff0000'; // По умолчанию красный
        
        // switch(this.typeName) {
        //     case 'smalShip':
        //         healthColor = '#ff6600'; // Оранжевый
        //         break;
        //     case 'mediumShip':
        //         healthColor = '#ff0000'; // Красный
        //         break;
        //     case 'largeShip':
        //         healthColor = '#9900ff'; // Фиолетовый
        //         break;
        //     case 'Boss':
        //         healthColor = '#ff00ff'; // Розовый/магента
        //         break;
        // }
        // ctx.fillStyle = healthColor;

        const healthPercent = this.enemyHealth / this.enemyMaxHealth;
        ctx.fillStyle = healthPercent > 0.5 ? '#00ff00' : '#ff0000';
        ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);
    }
}