function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert("Please set custom player names for both players!");
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if(activePlayer === 0 ){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){

    const selectedTarget = event.target;
     //the -1 turns these into numbers starting at 0
     const selectedColumn = selectedTarget.dataset.col -1;
     const selectedRow = selectedTarget.dataset.row -1;

    if(gameData[selectedRow][selectedColumn] > 0){
        alert("Please select an empty field")
        return;
    }
    

    selectedTarget.textContent =  players[activePlayer].symbol;
    selectedTarget.classList.add('disabled');

   

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    console.log(winnerId);
    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
    //Checking the rows for equality
    for(let i = 0; i < 3; i++){
        if(gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData [i][1] === gameData[i][2]){
            return gameData[i][0];
        }
    }
    //Checking the columns for equality
    for(let i = 0; i < 3; i++){
        if(gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData [1][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }
    //diagonal top left to bottom right
    if(gameData [0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] == gameData[2][2]){
        return gameData[0][0];
    }
    //diagonal bottom left to top right
    if(gameData [2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] == gameData[0][2]){
        return gameData[2][0];
    }
    //if there is a draw
    if (currentRound === 9) {
        return -1;
    }
    return 0;
}