const tetris = document.getElementById("tetris");
const ctx = tetris.getContext('2d');

ctx.scale(10, 10);


// All pieces created
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
}

function generatePiece() {     //randomizing a piece
    let random = Math.floor(Math.random() * pieces.length);
    return pieces[random];
}

function drawMatrix(matrix, x, y) {      //creates the piece on the document
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                ctx.fillRect(x + j, y + i, 1, 1);
            }
        }
    }
}

let interval = 1000;
let lastTime = 0;
let count = 0;
function downpieces(time = 0){
    const dt = time - lastTime;
    lastTime = time;
    count += dt;
    if(count >= interval){
        player.pos.y++;
        count = 0;
    }
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    ctx.fillStyle = "red";
    drawMatrix(player.matrix, player.pos.x, player.pos.y);
    requestAnimationFrame(downpieces);
}
downpieces();

function moveLeft() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    ctx.fillStyle = "red";
    drawMatrix(player.matrix, player.pos.x--, player.pos.y);
    ctx.endPath();
    requestAnimationFrame(moveLeft);
}

function moveRight() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, tetris.width, tetris.height);
    ctx.fillStyle = "red";
    drawMatrix(player.matrix, player.pos.x++, player.pos.y);
    ctx.endPath();
    requestAnimationFrame(moveRight);
}


drawMatrix(player.matrix, player.pos.x, player.pos.y);



function getKey(e) {
    let keyCode = e.key;
    console.log(keyCode);
}

window.addEventListener('keydown', function (event) {
    let key = event.key;
    switch (key) {
        case 'ArrowLeft':
            moveLeft(player.pos.x);
            break;
        case 'ArrowRight':
            moveRight(player.pos.x);
            break;
    }
    // case 38 : 
    //     changeOrientation(); 
    //     break;
    // case keyCode == 'ArrowRight': 

    //     break;
    // case 40 : 
    //     moveDown();
    //     break;
}
);


const background = document.querySelector('#background');
const ctxBackground = background.getContext("2d");


ctxBackground.scale(20, 20);
ctxBackground.fillStyle = 'red';
ctxBackground.fillRect(0, 0, 10, 20);