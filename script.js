//arrays with words example
const podmiot = ['Dziś jest', 'Wczoraj był', 'Jutro będzie', 'Za rok będzie', 'Ju za godzinę będzie'];
const verb = [ 'piękny dzień', 'miły poranek', 'deszczowy świt', 'mroczny zmierzch'];
const dopelnienie = [ 'ale co mi tam', 'i tak warto tyć', 'a jutro będzie lepiej'];
//pierwsza funkcja będzie się zajmować mieszaniem
//druga funkcja będzie składać zdanie - moze mozna wykorzytsać getter
function randomWord(wordArray) {
    let chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    return chosenWord;
} 

console.log(randomWord(podmiot));