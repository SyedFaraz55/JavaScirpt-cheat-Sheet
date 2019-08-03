const Hangman = function(word,guess){
    this.word = word.toLowerCase().split('');
    this.guess = guess;
    this.guessLetters = ['a'];
};

Hangman.prototype.getPuzzle = function() {
    let puzzle = '';
    this.word.forEach((letter)=> {
        if(this.guessLetters.includes(letter) || letter === ' '){
            puzzle += letter;   
        } else{
            puzzle +='*';
        }
    });

    return puzzle;
}

const h1 = new Hangman('cat',3);
const h2 = new Hangman('Car',3);

console.log(h1.getPuzzle())