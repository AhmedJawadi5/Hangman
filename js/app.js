

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
    {word:"DOLPHINE" , hint:"The word is an animal"} ,
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









// Cached Elements
const howToPlayButtonElement = document.querySelector("#howToPlayButton");
const howToPlayModelElement = document.querySelector("#howToPlayModel");
const howToPlayCloseBtnElement = document.getElementById("howToPlayCloseButton");

const wordSlotsElement = document.getElementById("wordSlots");








// Functions
function chooseRandomWord() {
    let numOfItemsInArray = words.length;
    let randomNumber = numOfItemsInArray * Math.random();
    let randomNumToWholeNum = Math.floor(randomNumber);

    chooseItemInArray = words[randomNumToWholeNum];
};

function displayChoosedWord() {
    let splitChoosedWord = chooseItemInArray.word.split('');
    console.log(splitChoosedWord);

    splitChoosedWord.forEach( (letter) => {
        const dash = document.createElement("span");
        dash.textContent = "_";
        wordSlotsElement.appendChild(dash);
    } );
};








// Event listeners
howToPlayButtonElement.addEventListener("click", () => {
    howToPlayModelElement.classList.remove("hidden");
    chooseRandomWord();
    displayChoosedWord();
});
howToPlayCloseBtnElement.addEventListener("click", () => {
    howToPlayModelElement.classList.add("hidden");
});


