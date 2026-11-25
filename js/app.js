

// Variables and Constant
 const words = [ 
    //Cars
    {word:"MERCEDES" , hint:"The word is a car company"} ,
    {word:"CHEVROLET" , hint:"The word is a car company"} ,
    {word:"BMW" , hint:"The word is a car company"} ,

    //Countries
    {word:"MEXICO" , hint:"The word is a country"} ,
    {word:"INDIA" , hint:"The word is a country"} ,
    {word:"OMAN" , hint:"The word is a country"} ,

    //Animals
    {word:"CROCODILE" , hint:"The word is an animal"} ,
    {word:"DOLPHIN" , hint:"The word is an animal"} ,
    {word:"RHINOS" , hint:"The word is an animal"} ,

    //Foods
    {word:"SOUP" , hint:"The word is a food"} ,
    {word:"SHAWARMA" , hint:"The word is a food"} ,
    {word:"BALALEET" , hint:"The word is a food"} ,

    //Sports
    {word:"VOLLEYBALL" , hint:"The word is a sport"} ,
    {word:"TENNIS" , hint:"The word is a sport"} ,
    {word:"GOLF" , hint:"The word is a sport"} ,
  ];

   let chooseItemInArray;

   let attempts = 6;









// Cached Elements
const howToPlayButtonElement = document.querySelector("#howToPlayButton");
const howToPlayModelElement = document.querySelector("#howToPlayModel");
const howToPlayCloseBtnElement = document.getElementById("howToPlayCloseButton");


const wordSlotsElement = document.getElementById("wordSlots");


const hintButtonElement = document.querySelector("#hintButton");
const hintModelElement = document.querySelector("#hintModel");
const hintCloseButtonElement = document.querySelector("#closeHintButton");
const hintParagraphElement = document.getElementById("hintMessage");


const keyboardElement = document.querySelector("#keyboard");
const letterButtonElements = document.querySelectorAll(".letterButton");


const attemptsLeftElement = document.querySelector("#attemptsLeft");


const headElement = document.querySelector("#head");
const bodyElement = document.querySelector("#body");
const leftArmElement = document.querySelector("#leftArm");
const rightArmElement = document.querySelector("#rightArm");
const leftLegElement = document.querySelector("#leftLeg");
const rightLegElement = document.querySelector("#rightLeg");


const winLoseModelElement = document.querySelector("#winLoseModel");
const winLoseParagraphElement = document.querySelector("#winLoseMessage");


const RestartButton = document.querySelector("#restartButton");
const winLoseRestartButtonElement = document.querySelector("#winLoseRestartButton");










// Functions
function init() {
    chooseRandomWord();
    displayChoosedWord();
    // So that when the player press restart, the attempts go back to 6
    attempts = 6;
    // After attempts go back to 6, we display it to screen
    attemptsLeftElement.textContent = attempts;

    // Hide all body parts
    headElement.classList.add("hidden");
    bodyElement.classList.add("hidden");
    leftArmElement.classList.add("hidden");
    rightArmElement.classList.add("hidden");
    leftLegElement.classList.add("hidden");
    rightLegElement.classList.add("hidden");

    // Remove the disable from the buttons
    letterButtonElements.forEach((letterButtonEl) => {
        letterButtonEl.removeAttribute("disabled")
    });

    // Hide the win/lose model
    winLoseModelElement.classList.add("hidden");
};


function chooseRandomWord() {
    let numOfItemsInArray = words.length;
    let randomNumber = numOfItemsInArray * Math.random();
    let randomNumToWholeNum = Math.floor(randomNumber);

    chooseItemInArray = words[randomNumToWholeNum];
    //testing
    console.log(chooseItemInArray.word);
};


let splitChoosedWord
function displayChoosedWord() {
    // This is to empty the letter slots when the player
    // clicks the restart button.
    wordSlotsElement.textContent = "";

    splitChoosedWord = chooseItemInArray.word.split('');

    splitChoosedWord.forEach( (letter) => {
        const dash = document.createElement("span");
        dash.textContent = "_";
        wordSlotsElement.appendChild(dash);
    } );
};


function reduceAttemptsLeft() {
    attempts--;
};


function showBodyParts() {
    if (attempts === 5) {
        headElement.classList.remove("hidden");
    }
    if (attempts === 4) {
        bodyElement.classList.remove("hidden");
    }
    if (attempts === 3) {
        leftArmElement.classList.remove("hidden");
    }
    if (attempts === 2) {
        rightArmElement.classList.remove("hidden");
    }
    if (attempts === 1) {
        leftLegElement.classList.remove("hidden");
    }
    if (attempts === 0) {
        rightLegElement.classList.remove("hidden");
    }
};


function checkForWinOrLose() {
    //Losing condition
    if (attempts === 0) {
        winLoseModelElement.classList.remove("hidden");
        winLoseParagraphElement.textContent = "You Lose! The word was " + chooseItemInArray.word;
    }

    //Winning condition
    let allLettersAreRevealed = true;
    for (let i=0 ; i<splitChoosedWord.length ; i++) {
        if (wordSlotsElement.children[i].textContent === "_") {
            allLettersAreRevealed = false;
        }
    }
    if (allLettersAreRevealed === true) {
        winLoseModelElement.classList.remove("hidden");
        winLoseParagraphElement.textContent = "You Win! The word was "+ chooseItemInArray.word;
    }
};


const handleReactionOfKeyboard = (event) => {
    //testing
    console.log(event.target);
    // To make sure that a button has been clicked, 
    // not anything else such as: div
    if (event.target.classList.contains("letterButton")) {
        // To add a property "disabled" to the button
        event.target.disabled = true;
        //New variable to store the clicked button content (the letter)
        let letterClicked = event.target.textContent;
        console.log(letterClicked);
        //Converting the letter to upperCase due to the words are uppercase
        let letterClickedToUpperCase = letterClicked.toUpperCase();
        //testing
        console.log(letterClickedToUpperCase);

        //To check if the word contains the letter
        /* The loop is better because it checks the letter for
           every position in the choosen word.
           Good for words that has double same letter, such as:
           "N" in "TENNIS" */
        let foundClickedLetterInWord = false;
        for (let i=0 ; i<splitChoosedWord.length ; i++) {
            //Checking if word contains the letter
            if (splitChoosedWord[i] === letterClickedToUpperCase) {
                console.log(true);
                foundClickedLetterInWord = true;
                wordSlotsElement.children[i].textContent = letterClickedToUpperCase;
            }
        }
        // Goes out from the loop. Now check if the clicked letter
        // is not in word, then reduce 1 attemps, copy the updated
        // attempts to the screen, and show a body part.
        if (foundClickedLetterInWord === false) {
            reduceAttemptsLeft();
            attemptsLeftElement.textContent = attempts;
            showBodyParts();
        }
        // Checking for win/lose after reducing the attempts
        checkForWinOrLose();
    }

    else {
        return;
    }
}








// Event listeners
howToPlayButtonElement.addEventListener("click", () => {
    howToPlayModelElement.classList.remove("hidden");
});
howToPlayCloseBtnElement.addEventListener("click", () => {
    howToPlayModelElement.classList.add("hidden");
});


hintButtonElement.addEventListener("click", () => {
    hintModelElement.classList.remove("hidden");
    hintParagraphElement.textContent = chooseItemInArray.hint;
});
hintCloseButtonElement.addEventListener("click", () => {
    hintModelElement.classList.add("hidden");
});


keyboardElement.addEventListener("click", handleReactionOfKeyboard);


RestartButton.addEventListener("click", init);
winLoseRestartButtonElement.addEventListener("click", init);










// Calling init() function. 
// Calling it down to make sure that everything is declared up.
init();






