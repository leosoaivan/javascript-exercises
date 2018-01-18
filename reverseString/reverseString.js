var reverseString = function(string) {
  let stringIndex = string.length - 1;
  let result = "";

  while (stringIndex >= 0) {
    result += string.charAt(stringIndex);
    stringIndex--;
  }

  return result;
};

module.exports = reverseString