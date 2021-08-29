{
  /* eslint-disable no-undef */
  /* eslint-disable no-inner-declarations */
  const playGame = function (playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('wylosowana liczba to ' + randomNumber);

    const getMoveName = function (argMoveId) {
      if(argMoveId == 1){
        return 'kamień!';
      } else if(argMoveId == 2){
        return 'papier!';
      } else if(argMoveId == 3){
        return 'nożyce!';
      } else {
        return 'nieznany ruch';
      }
    };
    getMoveName();

    const argComputerMove = getMoveName(randomNumber),
      argPlayerMove = getMoveName(playerInput);
    printMessage('Mój ruch to ' + argComputerMove);
    printMessage('Twój ruch to ' + argPlayerMove);


    const displayResult = function () {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if (argComputerMove == 'kamień!' && argPlayerMove == 'papier!') {
        printMessage('Ty wygrywasz');
      } else if (argComputerMove == 'kamień!' && argPlayerMove == 'nożyce!') {
        printMessage('Przegrywasz!');
      } else if (argComputerMove == 'kamień!' && argPlayerMove == 'kamień!') {
        printMessage('Remis');
      } else if (argComputerMove == 'nożyce!' && argPlayerMove == 'papier!') {
        printMessage('Przegrywasz!');
      } else if (argComputerMove == 'nożyce!' && argPlayerMove == 'kamień!') {
        printMessage('Wygrywasz!');
      } else if (argComputerMove == 'nożyce!' && argPlayerMove == 'nożyce!') {
        printMessage('Remis!');
      } else if (argComputerMove == 'papier!' && argPlayerMove == 'nożyce!') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'papier!' && argPlayerMove == 'kamień!') {
        printMessage('Przegrywasz!');
      } else if (argComputerMove == 'papier!' && argPlayerMove == 'papier!') {
        printMessage('Remis!');
      } else {
        printMessage('Nieprawidłowy ruch, spróbuj jeszcze raz');
      }
      //console.log(argComputerMove, argPlayerMove);
    };
    displayResult();
  };
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scisors').addEventListener('click', function(){
    playGame('3');
  });
}

