
export class UIManager {
    constructor() {
        this.scoreDisplay = document.getElementById('score-display');
        this.killsDisplay = document.getElementById('kills-display');
        this.multiplierDisplay = document.getElementById('multiplier-display');
        this.killsForNextDisplay = document.getElementById('killsForNext-display');
        this.mainMenu = document.getElementById('main-menu');
        this.gameOverScreen = document.getElementById('game-over');
        this.pauseScreen = document.getElementById('game-pause');

        this.waveDisplay = document.getElementById('wave-display');
        this.waveProgressDisplay = document.getElementById('wave-progress-display');
    }
    
    updateScore(score) {
        if (this.scoreDisplay) this.scoreDisplay.textContent = score;
    }
    
    updateKills(kills) {
        if (this.killsDisplay) this.killsDisplay.textContent = kills;
    }
    
    updateMultiplier(multiplier, killsForNext) {
        if (this.multiplierDisplay) {
            this.multiplierDisplay.textContent = `x${multiplier.toFixed(2)}`;
        }
        if (this.killsForNextDisplay) {
            this.killsForNextDisplay.textContent = `x${killsForNext.toFixed(0)}`;
        }
    }

    updateWaveInfo(waveInfo) {
        if (this.waveDisplay) {
            this.waveDisplay.textContent = `Волна ${waveInfo.number}: ${waveInfo.name}`;
        }
        
        if (this.waveProgressDisplay) {
            this.waveProgressDisplay.textContent = `${waveInfo.killsInWave}/${waveInfo.killsNeeded}`;
        }
    }
    
    updateAll(scoreManager) {
        this.updateScore(scoreManager.score);
        this.updateKills(scoreManager.kills);
        this.updateMultiplier(scoreManager.multiplier, scoreManager.killsForNextMultiplier);
    }
    
    showMainMenu() {
        this.mainMenu.classList.remove('hidden');
    }
    
    hideMainMenu() {
        this.mainMenu.classList.add('hidden');
    }
    
    showGameOver() {
        this.gameOverScreen.classList.remove('hidden');
    }
    
    hideGameOver() {
        this.gameOverScreen.classList.add('hidden');
    }

    showAndHidePause(hide) {
        hide == true? this.pauseScreen.classList.remove('hidden') : this.pauseScreen.classList.add('hidden');
    }
    
    showMultiplierNotification(multiplier) {
        const notification = document.createElement('div');
        notification.textContent = `Множитель x${multiplier.toFixed(2)}!`;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 215, 0, 0.9);
            color: #000;
            padding: 20px 40px;
            font-size: 32px;
            font-weight: bold;
            border-radius: 10px;
            z-index: 1000;
            animation: fadeInOut 2s forwards;
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }
    
    showWaveNotification(waveName) {
        const notification = document.createElement('div');
        notification.textContent = `🌊 Волна: ${waveName}!`;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 150, 255, 0.9);
            color: #fff;
            padding: 20px 40px;
            font-size: 32px;
            font-weight: bold;
            border-radius: 10px;
            z-index: 1000;
            animation: fadeInOut 2s forwards;
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }

    showPowerUpNotification(powerUpName) {
        const notification = document.createElement('div');
        notification.textContent = `✨ Получено: ${powerUpName}!`;
        notification.style.cssText = `
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 255, 100, 0.9);
            color: #000;
            padding: 15px 30px;
            font-size: 24px;
            font-weight: bold;
            border-radius: 8px;
            z-index: 1000;
            animation: fadeInOut 1.5s forwards;
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 1500);
    }
}