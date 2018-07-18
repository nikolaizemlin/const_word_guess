//Random word is selected and exported
var words = ['nintendo', 'cookie', 'telephone', 'helicopter'];
var word = Math.floor(Math.random() * words.length);
var randomWord = words[word];

exports.randomWord = randomWord;