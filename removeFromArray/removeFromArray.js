var removeFromArray = function(array, ...numsToMatch) {
  for (i = 0; i < numsToMatch.length; i++) {
    let indexThatMatches = array.indexOf(numsToMatch[i])

    if (indexThatMatches > -1) {
      array.splice(indexThatMatches, 1)
    }
  }

  return array;
}

module.exports = removeFromArray
