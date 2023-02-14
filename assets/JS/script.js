const tetris = document.getElementById("tetris");
const context = tetris.getContext('2d');

context.scale(10, 10);


// All pieces created
const pieces  = [
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
    pos: {x: 0, y: 0},
    matrix: generatePiece(),
}

function generatePiece () {     //randomizing a piece
    let random = Math.floor(Math.random() * pieces.length); 
    return pieces[random];  
}

function drawMatrix(matrix, x, y){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j]){
                context.fillRect(x + j, y + i, 1, 1);
            }
        }
    }
}

drawMatrix(player.matrix, player.pos.x, player.pos.y);


const background = document.querySelector('#background');
const ctxBackground = background.getContext("2d");


ctxBackground.scale(20, 20);
ctxBackground.fillStyle = 'red';
ctxBackground.fillRect(0, 0, 10, 20);









//generation on pieces region ends here 