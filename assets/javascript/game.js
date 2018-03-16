// arrays
var wordList = [
 "banana",
 "pear",
 "raspberry",
 "strawberry",
 "watermelon",
 "cherry",
 "peach",
 "oranges"
]

// variables
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanks = [];
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 1;
var numOfGuesses = 15;


function gameStart(){
  wrongGuesses = [];
  numOfGuesses = 15;
  blanks = [];

  // chooses word from list
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

  // hides word
  lettersInChosenWord = chosenWord.split("");

  // creates blank spaces for letters
  numBlanks = lettersInChosenWord.length;
  for(var i = 0; i < numBlanks; i++){
      blanks.push("_");
}
  document.getElementById('wordBlank').innerHTML = blanks.join(" ");
  document.getElementById('guessesLeft').innerHTML = numOfGuesses;
}


function letterCheck(letter){
    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;
        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanks[i] = letter;
        }
    }

      }else{
          numOfGuesses --;
          wrongGuesses.push(letter)
      }
}


function roundComplete(){
    document.getElementById('wordBlank').innerHTML = blanks.join(" ");
    document.getElementById('guessesLeft').innerHTML = numOfGuesses;
    document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");

    if(lettersInChosenWord.join(" ") === blanks.join(" ")){
        winCounter++;
        document.getElementById("image-div").style.visibility = "visible";
        document.getElementById('winCounter').innerHTML = winCounter;
        $("#image-div").html("<img src='assets/images/fruitBowl.png' />"); 
        $("#guessesLeft").off(onkeydown);
        gameStart(); 

    }else if(numOfGuesses === 0){
        document.getElementById('lossCounter').innerHTML  = lossCounter ++;
        document.getElementById('wrongGuesses').innerHTML = "";
        $("#image-div").html("<img src='assets/images/sadBowl.png' />");
        console.log("Game Over");
        gameStart();      
    }

}

// Click to restart game
function restartGame() {
    $("#image-div").html("");
    gameStart();

}


gameStart();
document.onkeydown = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    letterCheck(letterGuessed)
    roundComplete();
}




