var game = require('./game');
var wordCons = require('./word');
var letterCons = require('./letter');
var inquirer = require('inquirer');
var randomWord = game.randomWord;
var letterGuessed;

var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 2;

function takeAGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('Game over. You have no more guesses left.');
		// inquirer.prompt([
		// 	{
		// 		name: 'play',
		// 		message: 'Do you want to play again?',
		// 		type: 'list',
		// 		choices: ['yes', 'no']
		// 	}
		// ]).then(function(play){
		// 	if(play.choices === 'yes') {
		// 		return takeAGuess();
		// 	}
		// 	return;
		// });
		return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
//			if (str.length != 1) return false;
			var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
				var letter = letterInput.letter; 
				myWord.findLetter(letter); //Check
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; //Winner
					}
				// console.log('-------------------\n'); //If we are here the game did not end. Next guess.
				console.log('\nYou have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				console.log('');
				takeAGuess(); //Recursive call
				}
  );
}

takeAGuess(); //Start Game

exports.letter;