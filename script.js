let squarePointer = []


const player = (marker, identity) => {
    let mark = marker; 
    const getMark = () => mark;
    let id = identity;
    const getIdentity = () => id; 
    let score = 0; 
    const getScore = () => {return String(score)};
    const updateScore = (_score) => score = score + 1;

    return {getMark, getIdentity, getScore, updateScore}
}

let player1 = player('X', 0)
let player2 = player('O', 1);

let currentPlayer = player1;


const square = (id) => {
    const identity = id;
    let clicked = false;
    let squareContent = '';
    const sq = document.createElement('div');
    sq.setAttribute('id', String(identity));
    sq.classList.add('square');

    const updateSquareContent = () => {
        squareContent = '';
        clicked = false;
        sq.textContent = squareContent;
    }

    const getSquareContent = () => {
        return squareContent;
    }


    getId = () => {
    }

    sq.addEventListener('click', function () {

        if (clicked == false) {

            squarePointer.push(identity);
            squareContent = currentPlayer.getMark();
            sq.textContent = squareContent;
            console.log(squarePointer)
            clicked = true;

            gameBoard.checkWin();
            gameBoard.squareControl();
            gameBoard.updateScores();


        }
    });


    return {sq, getSquareContent, updateSquareContent};
}



const board = () => {
    let board = [];
    let identity = 0; 
    const container = document.getElementById('content');
    container.classList.add('content')
    let currentMark = 'O';


    const addSquaresToArray = () => {
        for(let i = 0; i < 9; i++) {
            board.push(square(i))
        }
    
    }
    
    const addSquaresToScreen = () => {
        container.innerHTML = ''

        for (let i = 0; i < board.length; i ++) {
            container.append(board[i].sq)
        }
    }

    const updateScores = () => {
        const player1Div = document.getElementById('p1Score')
        player1Div.textContent = player1.getScore()

        const player2Div = document.getElementById('p2Score')
        player2Div.textContent = player2.getScore()
    }

    const checkWin = () => {
        let win = false; 
        if ((board[0].getSquareContent() == 'O') ||  (board[0].getSquareContent() == 'X')){
            if (board[0].getSquareContent() == board[1].getSquareContent() && board[0].getSquareContent() == board[2].getSquareContent() )  {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            } else if (
                board[0].getSquareContent() == board[3].getSquareContent() && board[0].getSquareContent() == board[6].getSquareContent() 
            ) {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            }
        } 
        if ((board[8].getSquareContent() == 'O') ||  (board[8].getSquareContent() == 'X')){
            if (board[8].getSquareContent() == board[5].getSquareContent() && board[8].getSquareContent() == board[2].getSquareContent() )  {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            } else if (
                board[8].getSquareContent() == board[7].getSquareContent() && board[8].getSquareContent() == board[6].getSquareContent() 
            ) {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            }
        } 
        if ((board[4].getSquareContent() == 'O') ||  (board[4].getSquareContent() == 'X')){
            if (board[4].getSquareContent() == board[3].getSquareContent() && board[4].getSquareContent() == board[5].getSquareContent() )  {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            } 
            else if (board[4].getSquareContent() == board[1].getSquareContent() && board[4].getSquareContent() == board[7].getSquareContent() )  {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            } 
            else if (board[4].getSquareContent() == board[0].getSquareContent() && board[4].getSquareContent() == board[8].getSquareContent() )  {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            } 
            else if (board[4].getSquareContent() == board[2].getSquareContent() && board[4].getSquareContent() == board[6].getSquareContent() )  {
                currentPlayer.updateScore();
                console.log(currentPlayer.getScore())
                win = true; 
            } 
           
        }

        if (win == true) {
            squarePointer = []
            for (let i = 0; i < board.length; i ++) {
                board[i].updateSquareContent(); 
            }
            win = false; 
        }
    }

    const squareControl = () => {
        console.log(squarePointer)

        currentPlayer == player1 ? currentPlayer= player2: currentPlayer = player1


        if (squarePointer.length == 9) {
            squarePointer = [];
            for (let i = 0; i < board.length; i ++) {
                board[i].updateSquareContent(); 

            }
        }
    }
   
    updateScores();
    addSquaresToArray();
    addSquaresToScreen();

    return {squareControl, checkWin, updateScores}
        
}

const gameBoard = board();








