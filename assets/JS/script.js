const canvas = document.getElementById("tetris");
const context = canvas.getContext('2d');

context.scale('10', '10');


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
    matrix: pieces[3]
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



// context.style = "red";
// context.fillRect(1, 1, 100, 100);





// const pieces = document.querySelectorAll('.piece');   //all the pieces 
// const grid = document.querySelector('#grid');
// //var region ends here 

// pieces.forEach(el => {
//     el.style.display = "none";  //each piece is invisible to the user
//     el.style.transform = 'translate(33rem, 2rem)'; 
// }); 

// function generatePiece () {     //randomizing a piece
//     let random = Math.floor(Math.random() * pieces.length);
//     pieces[random].style.display = 'inline';
// }

// generatePiece();

//generation on pieces region ends here 