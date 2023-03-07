const tetris = document.getElementById("tetris");
const ctx = tetris.getContext('2d');
ctx.scale(20, 20);

const background = document.querySelector('#background');
const ctxBackground = background.getContext("2d");
ctxBackground.scale(10, 10);
ctxBackground.fillStyle = '#000';
ctxBackground.fillRect(0, 0, 10, 20);
const Background = {
    height : 10,
    width : 20,
};

const player = {
    pos: { x: 5, y: 0 },
    matrix: generatePiece(),    
    speed : 1,
    width : 0,
    height : 0,
    interactivityEnabled : true,
}

let ctxOrientation = false;

let interval = 1000;
let lastTime = 0;
let count = 0;

let pieces = [  // LIST OF PIECES
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

// VAR REGION ENDS HERE

function generatePiece() {     
    let random = Math.floor(Math.random() * pieces.length);
    return pieces[random];
}
//RANDOM PIECE FUNCTION 

function drawMatrix(matrix, x, y) {      
    for (let i = 0; i < matrix.length; i++) {   //FIRST DIMENSION
        for (let j = 0; j < matrix[i].length; j++) { //SECOND DIMENTION 
            switch (player.matrix) {    //SWITCH LOOP FOR THE COLOR OF EACH PIECES
                case pieces[0] : 
                    ctx.fillStyle = "#eddf47";  //YELLOW O BLOCK
                    player.width = 2;
                    player.height = 2;
                    break;
                case pieces[1] : 
                    ctx.fillStyle = "#43e8ca"; //TURQUOISE I BLOCK
                    player.width = 1;
                    player.height = 4;
                    break;
                case pieces[2] : 
                    ctx.fillStyle = "#06d618";  //GREEN Z BLOCK
                    player.width = 3;
                    player.height = 2;
                    break;
                case pieces[3] : 
                    ctx.fillStyle = "red"; //RED S BLOCK
                    player.width = 3;
                    player.height = 2;
                    break;
                case pieces[4] : 
                    ctx.fillStyle = "#f75c02"; //ORANGE L BLOCK
                    player.width = 2;
                    player.height = 3;
                    break;
                case pieces[5] : 
                    ctx.fillStyle = "#080ec7"; //BLUE J BLOCK
                    player.width = 2;
                    player.height = 3;
                    break;
                case pieces[6] : 
                    ctx.fillStyle = "#980ee3";  //PURPLE T BLOCK
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

drawMatrix(player.matrix, player.pos.x, player.pos.y);

// DRAWING PIECES FUNCTION REGION ENDS HERE



function downpieces(time = 0){  //CONTINUOUSLY MOVES THE PIECE TOWARDS THE BOTTOM
    const dt = time - lastTime;
    lastTime = time;
    count += dt;
    if(count >= interval){
        player.pos.y++;
        count = 0;
    };
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    drawMatrix(player.matrix, player.pos.x, player.pos.y);
    requestAnimationFrame(downpieces); 
    player.pos.y + player.height > 20 ? player.pos.y = 19 - player.height + 1 : downpieces;
}

function moveLeft() {   
    while (player.pos.x + player.width !== 0 + player.width) {
        ctx.beginPath();
        player.pos.x -= player.speed;
        ctx.fillRect(0, 0, tetris.width, tetris.height);
        drawMatrix(player.matrix, player.pos.x, player.pos.y);
        ctx.endPath();
        requestAnimationFrame(moveLeft);
    }
}

function moveRight() {  
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
    player.pos.y = 19 - player.height + 1;
}
// Y AXIS MOVEMENT FUNCTION REGION ENDS HERE

function changeOrientation() {
    ctx.save();
    downpieces = false;
    ctx.translate(player.pos.x, player.pos.y);
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    ctx.rotate(90 * Math.PI / 180);
    ctx.translate(player.pos.x - player.width , player.pos.y - player.height);
    downpiecesX();
    ctx.endPath();
    ctx.restore();
    ctxOrientation = true;
}

function downpiecesX(time = 0){  //CONTINUOUSLY MOVES THE PIECE TOWARDS THE BOTTOM
    const dt = time - lastTime;
    lastTime = time;
    count += dt;
    if(count >= interval){
        player.pos.x++;
        count = 0;
    };
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    drawMatrix(player.matrix, player.pos.x, player.pos.y);
    requestAnimationFrame(downpiecesX); 
    player.pos.x + player.width > 20 ? player.pos.x = 24 - player.width + 1 : downpiecesX;
}

function moveDownX () {
    player.speed = 2; 
    player.pos.x += player.speed;
    player.pos.x + player.height > 20 ? player.pos.y = 19 - player.height + 1 : downpiecesX;
}

function moveRightX() {  
    while (player.pos.y + player.width != 13 - player.width + 1) {
        ctx.beginPath();
        player.pos.y += player.speed;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, tetris.width, tetris.height);
        drawMatrix(player.matrix, player.pos.x, player.pos.y);
        ctx.endPath();
        requestAnimationFrame(moveRightX);   
    } 
}

function toBottomX() {
    player.pos.x = 19 - player.height + 1;
}

function moveLeftX() {   
    while (player.pos.y + player.width !== 0 + player.width) {
        ctx.beginPath();
        player.pos.y -= player.speed;
        ctx.fillRect(0, 0, tetris.width, tetris.height);
        drawMatrix(player.matrix, player.pos.x, player.pos.y);
        ctx.endPath();
        requestAnimationFrame(moveLeftX);
    }
}
//X AXIS MOVEMENT FUNCTION REGION ENDS HERE



window.addEventListener('keydown', function (event) {
    if (!ctxOrientation) {  // IF ORIENTATION TO Y AXIS
        downpieces();
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
                toBottom();
                break;
            case 'ArrowUp' : 
                changeOrientation(); 
                break; 
        }
    }else {
        downpiecesX()   // IF ORIENTATION TO X AXIS
        let key = event.key;
        switch (key) {
            case 'ArrowLeft':
                moveLeftX();
                break;
            case 'ArrowRight':
                moveRightX();
                break;
            case 'ArrowDown': 
                moveDownX();
                break;
            case ' ' : 
                toBottomX();
                break;
            case 'ArrowUp' : 
                changeOrientation(); 
                break; 
        }
    }
});