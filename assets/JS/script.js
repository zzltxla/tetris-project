const canvas = document.getElementById("tetris");
const context = canvas.getContext('2d');

context.scale('20, 20');

context.fillRect(0, 0, 1, 1);

const pieces  = [
    [
        [1, 1],
        [1, 1]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    [
        []
    ]
];





const pieces = document.querySelectorAll('.piece');   //all the pieces 
const grid = document.querySelector('#grid');
//var region ends here 

pieces.forEach(el => {
    el.style.display = "none";  //each piece is invisible to the user
    el.style.transform = 'translate(33rem, 2rem)'; 
}); 

function generatePiece () {     //randomizing a piece
    let random = Math.floor(Math.random() * pieces.length);
    pieces[random].style.display = 'inline';
}

generatePiece();

//generation on pieces region ends here 