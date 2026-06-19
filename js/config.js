
export const gameConfig = {
    canvas: {
        width: 800,
        height: 800
    },
    
    enemySpawn: {
        interval: 5000  // мс
    },
    
    score: {
        initialMultiplier: 1,
        killsForNextMultiplier: 10,
        multiplierGrowth: 1.5
    },
    
    enemyTypes: [
        {
            name: 'smalShip',
            spriteSheet: 'images/SpritesEnemy2.png',
            sprites: [
                { sx: 51, sy: 0, swidth: 32, sheight: 58 },
                { sx: 200, sy: 0, swidth: 42, sheight: 48 },
                { sx: 242, sy: 0, swidth: 28, sheight: 56 }
            ],
            speed: 1,
            dy: 2,
            points: 5,
            health: 1
        },
        {
            name: 'mediumShip',
            spriteSheet: 'images/SpritesEnemy2.png',
            sprites: [
                { sx: 0, sy: 0, swidth: 50, sheight: 59 },
                { sx: 82, sy: 0, swidth: 58, sheight: 60 },
                { sx: 140, sy: 0, swidth: 60, sheight: 56 }
            ],
            speed: 0.8,
            dy: 2,
            points: 10,
            health: 2
        },
        {
            name: 'largeShip',
            spriteSheet: 'images/SpritesEnemy2.png',
            sprites: [
                { sx: 270, sy: 0, swidth: 56, sheight: 60 },
                { sx: 326, sy: 0, swidth: 52, sheight: 60 } 
            ],
            speed: 0.5,
            dy: 2,
            points: 20,
            health: 4
        },
        {
            name: 'Boss',
            spriteSheet: 'images/Boss.png',
            sprites: [
                { sx: 0, sy: 0, swidth: 197, sheight: 185 }
            ],
            speed: 0.5,
            dy: 2,
            points: 20,
            health: 10
        }
    ],
    
    playerSprites: {
        down: 'images/player_down.png',
        left: 'images/player_left.png',
        right: 'images/player_right.png',
        up: 'images/player_up.png',
        left_down: 'images/player_left_down.png',
        left_up: 'images/player_left_up.png',
        right_down: 'images/player_right_down.png',
        right_up: 'images/player_right_up.png',
        idle: 'images/player.png'
    },

    waves: [
        {
            name: 'Разведка',
            killsNeeded: 10,
            spawnInterval: 2000,
            maxEnemies: 5,
            enemyTypes: [
                { name: 'smalShip', weight: 100 },  // 100% шанс
                { name: 'mediumShip', weight: 0 },   // 0% шанс
                { name: 'largeShip', weight: 0 },
                { name: 'Boss', weight: 0 }
            ]
        },
        {
            name: 'Первый контакт',
            killsNeeded: 15,
            spawnInterval: 1500,
            maxEnemies: 8,
            enemyTypes: [
                { name: 'smalShip', weight: 70 },
                { name: 'mediumShip', weight: 30 },
                { name: 'largeShip', weight: 0 },
                { name: 'Boss', weight: 0 }
            ]
        },
        {
            name: 'Усиление',
            killsNeeded: 20,
            spawnInterval: 1200,
            maxEnemies: 12,
            enemyTypes: [
                { name: 'smalShip', weight: 50 },
                { name: 'mediumShip', weight: 35 },
                { name: 'largeShip', weight: 15 },
                { name: 'Boss', weight: 0 }
            ]
        },
        {
            name: 'Босс приближается',
            killsNeeded: 25,
            spawnInterval: 1000,
            maxEnemies: 15,
            enemyTypes: [
                { name: 'smalShip', weight: 40 },
                { name: 'mediumShip', weight: 30 },
                { name: 'largeShip', weight: 20 },
                { name: 'Boss', weight: 10 }  // 10% шанс босса
            ]
        },
        {
            name: 'Боссы атакуют',
            killsNeeded: 150,
            spawnInterval: 800,
            maxEnemies: 20,
            enemyTypes: [
                { name: 'smalShip', weight: 30 },
                { name: 'mediumShip', weight: 30 },
                { name: 'largeShip', weight: 25 },
                { name: 'Boss', weight: 15 }
            ]
        },
        {
            name: 'Хаос',
            killsNeeded: 150,
            spawnInterval: 600,
            maxEnemies: 30,
            enemyTypes: [
                { name: 'smalShip', weight: 15 },
                { name: 'mediumShip', weight: 30 },
                { name: 'largeShip', weight: 30 },
                { name: 'Boss', weight: 25 }
            ]
        },
        {
            name: 'Безумие',
            killsNeeded: 150,
            spawnInterval: 500,
            maxEnemies: 100,
            enemyTypes: [
                { name: 'smalShip', weight: 5 },
                { name: 'mediumShip', weight: 20 },
                { name: 'largeShip', weight: 40 },
                { name: 'Boss', weight: 35 }
            ]
        }
    ],

    bonusRates: {
        smalShip: 0.05,    // 5% шанс
        mediumShip: 0.10,  // 10% шанс
        largeShip: 0.20,   // 20% шанс
        Boss: 0.40         // 40% шанс
    },
    
    bonusTypes: [
        { type: 'health', weight: 30 },        // 30%
        { type: 'fullHealth', weight: 10 },    // 10%
        { type: 'fireRate', weight: 15 },      // 20%
        { type: 'multiShot', weight: 15 },     // 20%
        { type: 'shield', weight: 30 },        // 15%
        { type: 'strongShield', weight: 10 }    // 5%
    ]
};

    // // Координаты каждого врага на спрайт-листе
    // this.enemySprites = [
    //     { sx: 0, sy: 0, swidth: 50, sheight: 59 },    // Враг 1
    //     { sx: 51, sy: 0, swidth: 32, sheight: 58 },   // Враг 2
    //     { sx: 82, sy: 0, swidth: 58, sheight: 60 },  // Враг 3
    //     { sx: 140, sy: 0, swidth: 60, sheight: 56 },  // Враг 4
    //     { sx: 200, sy: 0, swidth: 42, sheight: 48 },    // Враг 5
    //     { sx: 242, sy: 0, swidth: 28, sheight: 56 },   // Враг 6
    //     { sx: 270, sy: 0, swidth: 56, sheight: 60 },  // Враг 7
    //     { sx: 326, sy: 0, swidth: 52, sheight: 60 }   // Враг 8
    // ];
