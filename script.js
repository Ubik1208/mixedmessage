//arrays with words example
const podmiot = ['I', 'You', 'He', 'She', 'We', 'They'];
const verb = [ 'go', 'do', 'ride', 'visit'];
const dopelnienie = [ 'home', 'bank', 'school'];
//pierwsza funkcja będzie się zajmować mieszaniem
//druga funkcja będzie składać zdanie - moze mozna wykorzytsać getter
function randomWord(wordArray) {
    let chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    return chosenWord;
} 

console.log(randomWord(podmiot));