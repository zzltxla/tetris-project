const tetris = document.getElementById("tetris");
const ctx = tetris.getContext('2d');
    
ctx.scale(20, 20);


// All pieces 
const pieces = [
    [
        [1, 1],
        [1, 1]
    ],
    [
        [1],
        [1],
        [1],
        [1]
    ],
    [
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0],
        [1, 0],
        [1, 1]
    ],
    [
        [0, 1],
        [0, 1],
        [1, 1]
    ],
    [
        [1, 1, 1],
        [0, 1, 0]
    ],
];





const player = {
    pos: { x: 5, y: 0 },
    matrix: generatePiece(),    //genrates random pieces 
    speed : 1,
    width : 0,
    height : 0,
}

function generatePiece() {     //randomizing a piece
    let random = Math.floor(Math.random() * pieces.length);
    return pieces[random];
}

function drawMatrix(matrix, x, y) {      //creates the piece on the document
    for (let i = 0; i < matrix.length; i++) {   //first dimention
        for (let j = 0; j < matrix[i].length; j++) { //second dimention
            switch (player.matrix) {    //SWITCH colors of each pieces
                case pieces[0] : 
                    ctx.fillStyle = "#eddf47";  //yellow o block
                    player.width = 2;
                    player.height = 2;
                    break;
                case pieces[1] : 
                    ctx.fillStyle = "#43e8ca"; //turquoise I block
                    player.width = 1;
                    player.height = 4;
                    break;
                case pieces[2] : 
                    ctx.fillStyle = "#06d618";  //green z block
                    player.width = 3;
                    player.height = 2;
                    break;
                case pieces[3] : 
                    ctx.fillStyle = "red"; //red s block
                    player.width = 3;
                    player.height = 2;
                    break;
                case pieces[4] : 
                    ctx.fillStyle = "#f75c02"; //orange L block
                    player.width = 2;
                    player.height = 3;
                    break;
                case pieces[5] : 
                    ctx.fillStyle = "#080ec7"; //night blue J block
                    player.width = 2;
                    player.height = 3;
                    break;
                case pieces[6] : 
                    ctx.fillStyle = "#980ee3";  //purple T block
                    player.width = 3;
                    player.height = 2;
                    break;
            }
            if (matrix[i][j]) {
                ctx.fillRect(x + j, y + i, 1, 1);
            }
        }
    }
}

let interval = 1000;
let lastTime = 0;
let count = 0;

function downpieces(time = 0){  //continuously moves the piece towards the bottom
    const dt = time - lastTime;
    lastTime = time;
    count += dt;
    if(count >= interval){
        player.pos.y++;
        count = 0;
    }
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    drawMatrix(player.matrix, player.pos.x, player.pos.y);
    requestAnimationFrame(downpieces); 
    player.pos.y + player.height > 20 ? player.pos.y = 19 - player.height + 1 : downpieces;
}

downpieces();

function moveLeft() {   //when left arrow pressed, moves towards the left
    while (player.pos.x + player.width !== 0 + player.width) {
        ctx.beginPath();
        player.pos.x -= player.speed;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, tetris.width, tetris.height);
        drawMatrix(player.matrix, player.pos.x, player.pos.y);
        ctx.endPath();
        requestAnimationFrame(moveLeft);
    }
}

function moveRight() {  //when right arrow pressed, moves towards the right
    while (player.pos.x + player.width != 13 - player.width + 1) {
        ctx.beginPath();
        player.pos.x += player.speed;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, tetris.width, tetris.height);
        drawMatrix(player.matrix, player.pos.x, player.pos.y);
        ctx.endPath();
        requestAnimationFrame(moveRight);   
    } 
}

function moveDown () {
    player.speed = 2;
    player.pos.y += player.speed;
    player.pos.y + player.height > 20 ? player.pos.y = 19 - player.height + 1 : downpieces;
}   

function toBottom() {
    let lastPos = player.pos.y = 19 - player.height + 1;
    return lastPos;
}

drawMatrix(player.matrix, player.pos.x, player.pos.y);

switch (player.pos.y) {
    case player.pos.y = 19 - player.height + 1 : 
    while (this.disabled(true)) {
        drawMatrix(player.matrix, player.pos.x, player.pos.y);
    }
    break;
}

async function newPiece() {
    await lastPos; 
    this.disabled(true);
    drawMatrix(player.matrix, player.pos.x, player.pos.y);
    return player;
}

window.addEventListener('keydown', function (event) {
    let key = event.key;
    switch (key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowDown': 
            moveDown();
            break;
        case ' ' : 
            toBottom()
            break;
    }
    // case 38 : 
    //     changeOrientation(); 
    //     break;
    // case keyCode == 'ArrowRight': 
});


const background = document.querySelector('#background');
const ctxBackground = background.getContext("2d");


ctxBackground.scale(10, 10);
ctxBackground.fillStyle = '#000';
ctxBackground.fillRect(0, 0, 10, 20);