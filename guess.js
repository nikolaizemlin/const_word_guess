//Random word is selected and exported
var words = ['nintendo', 'baking', 'computer', 'playstation'];
var word = Math.floor(Math.random() * words.length);
var randomWord = words[word];

exports.randomWord = randomWord;