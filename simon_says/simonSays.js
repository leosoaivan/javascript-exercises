function echo(string) {
	return string
}

function shout(string) {
	return string.toUpperCase()
}

function repeat(string, count = 2) {
	return (string + ' ').repeat(count).trim()
}

function pieceOfWord(string, sliceEnd) {
	return string.slice(0, sliceEnd)
}

function firstWord(string) {
	return string.split(' ')[0]
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(string) {
	const words = string.split(' ')
	const littleWords = ['the', 'over', 'and']
	let title = '';

	words.forEach(function(word, index) {
		if (index == 0) {
			title += capitalize(word)
		} else if (littleWords.includes(words[index])) {
			title += (' ' + word)
		} else {
			title += (' ' + capitalize(word)) 
		}
	});
	return title
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}