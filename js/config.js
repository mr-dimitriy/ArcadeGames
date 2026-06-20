
export const gameConfig = {
    canvas: {
        width: 1000,
        height: 900
    },
    
    enemySpawn: {
        interval: 5000  // мс
    },
    
    score: {
        initialMultiplier: 1,
        killsForNextMultiplier: 10,
        multiplierGrowth: 1.5
    },

    durationInvulnerability: 1000,
    
    enemyTypes: [
        {
            name: 'smalShip',
            spriteSheet: 'images/SpritesEnemy2.png',
            sprites: [
                { sx: 51, sy: 0, swidth: 32, sheight: 58 },
                { sx: 200, sy: 0, swidth: 42, sheight: 48 },
                { sx: 242, sy: 0, swidth: 28, sheight: 56 }
            ],
            speed: 1.8,
            dy: 1,
            points: 5,
            health: 1,
            damage: 1,
            armor: 0
        },
        {
            name: 'mediumShip',
            spriteSheet: 'images/SpritesEnemy2.png',
            sprites: [
                { sx: 0, sy: 0, swidth: 50, sheight: 59 },
                { sx: 82, sy: 0, swidth: 58, sheight: 60 },
                { sx: 140, sy: 0, swidth: 60, sheight: 56 }
            ],
            speed: 1.4,
            dy: 1,
            points: 10,
            health: 2,
            damage: 1,
            armor: 0
        },
        {
            name: 'largeShip',
            spriteSheet: 'images/SpritesEnemy2.png',
            sprites: [
                { sx: 270, sy: 0, swidth: 56, sheight: 60 },
                { sx: 326, sy: 0, swidth: 52, sheight: 60 } 
            ],
            speed: 1,
            dy: 1,
            points: 20,
            health: 4,
            damage: 2,
            armor: 1
        },
        {
            name: 'Boss',
            spriteSheet: 'images/Boss.png',
            sprites: [
                { sx: 0, sy: 0, swidth: 197, sheight: 185 }
            ],
            speed: 0.8,
            dy: 1,
            points: 40,
            health: 10,
            damage: 3,
            armor: 2
        },
        {
            name: 'strongBoss',
            spriteSheet: 'images/strongBoss.png',
            sprites: [
                { sx: 0, sy: 0, swidth: 635, sheight: 167 }
            ],
            speed: 0.4,
            dy: 1,
            points: 100,
            health: 50,
            damage: 3,
            armor: 3
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
            ]
        },
        {
            name: 'Первый контакт',
            killsNeeded: 20,
            spawnInterval: 1500,
            maxEnemies: 10,
            enemyTypes: [
                { name: 'smalShip', weight: 70 },
                { name: 'mediumShip', weight: 30 },
            ]
        },
        {
            name: 'Усиление',
            killsNeeded: 40,
            spawnInterval: 1200,
            maxEnemies: 15,
            enemyTypes: [
                { name: 'smalShip', weight: 50 },
                { name: 'mediumShip', weight: 35 },
                { name: 'largeShip', weight: 15 }
            ]
        },
        {
            name: 'Босс приближается',
            killsNeeded: 70,
            spawnInterval: 1000,
            maxEnemies: 30,
            enemyTypes: [
                { name: 'smalShip', weight: 40 },
                { name: 'mediumShip', weight: 30 },
                { name: 'largeShip', weight: 20 },
                { name: 'Boss', weight: 10 }  // 10% шанс босса
            ]
        },
        {
            name: 'Боссы атакуют',
            killsNeeded: 120,
            spawnInterval: 800,
            maxEnemies: 40,
            enemyTypes: [
                { name: 'smalShip', weight: 28 },
                { name: 'mediumShip', weight: 30 },
                { name: 'largeShip', weight: 25 },
                { name: 'Boss', weight: 15 },
                { name: 'strongBoss', weight: 2 }
            ]
        },
        {
            name: 'Хаос',
            killsNeeded: 300,
            spawnInterval: 600,
            maxEnemies: 60,
            enemyTypes: [
                { name: 'smalShip', weight: 10 },
                { name: 'mediumShip', weight: 25 },
                { name: 'largeShip', weight: 30 },
                { name: 'Boss', weight: 25 },
                { name: 'strongBoss', weight: 10 }
            ]
        },
        {
            name: 'Безумие',
            killsNeeded: 500,
            spawnInterval: 500,
            maxEnemies: 100,
            enemyTypes: [
                { name: 'smalShip', weight: 0 },
                { name: 'mediumShip', weight: 10 },
                { name: 'largeShip', weight: 35 },
                { name: 'Boss', weight: 35 },
                { name: 'strongBoss', weight: 20 }
            ]
        }
    ],

    bonusRates: {
        smalShip: 0.15,    // 15% шанс
        mediumShip: 0.25,  // 25% шанс
        largeShip: 0.40,   // 40% шанс
        Boss: 0.50,         // 40% шанс
        strongBoss: 0.90         //90% шанс
    },
    
    bonusTypes: [
        { type: 'health', weight: 22 },        // 30%
        { type: 'shield', weight: 22 },        // 15%
        { type: 'speed', weight: 20 },     // 5%
        { type: 'fireRate', weight: 15 },      // 20%
        { type: 'multiShot', weight: 10 },     // 20%
        { type: 'fullHealth', weight: 6 },    // 10%
        { type: 'strongShield', weight: 5 },  // 5%
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
