//arrays with words example
const phraseArrOne = ['Dziś jest', 'Wczoraj był', 'Jutro będzie', 'Za rok będzie', 'Juz za godzinę będzie'];
const phraseArrTwo = [ 'piękny dzień', 'miły poranek', 'deszczowy świt', 'mroczny zmierzch'];
const phraseArrThree = [ 'ale co mi tam', 'i tak warto tyć', 'a i tak będzie lepiej'];

// the function below randomly choses one phrase from array

function randomWord(wordArray) {
    let chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    return chosenWord;
} 

// the function below put three randomly chosen phrases together

function mixWords() {
    let wordOne = randomWord(phraseArrOne);
    let wordTwo = randomWord(phraseArrTwo);
    let wordThree = randomWord(phraseArrThree);
    return `${wordOne} ${wordTwo} ${wordThree}`
}

console.log(mixWords());