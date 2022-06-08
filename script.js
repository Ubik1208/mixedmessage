//arrays with words example
const phraseArrOne = ['Dziś jest', 'Wczoraj był', 'Jutro będzie', 'Za rok będzie', 'Juz za godzinę będzie'];
const phraseArrTwo = [ 'piękny dzień', 'miły poranek', 'deszczowy świt', 'mroczny zmierzch'];
const phraseArrThree = [ 'ale co mi tam', 'i tak warto tyć', 'a i tak będzie lepiej'];

// the function below randomly choses one phrase from array

function randomWord(wordArray) {
    const chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    return chosenWord;
} 

// the function below put three randomly chosen phrases together

function mixWords() {
    const wordOne = randomWord(phraseArrOne);
    const wordTwo = randomWord(phraseArrTwo);
    const wordThree = randomWord(phraseArrThree);
    return `${wordOne} ${wordTwo} ${wordThree}`
}

const button = document.getElementById("btn");
const phrase = document.getElementById("msg");

//the function mixWords is called after clicking button

button.onclick = () =>{
    phrase.innerHTML = mixWords();
}
