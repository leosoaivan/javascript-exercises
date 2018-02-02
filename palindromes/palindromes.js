var palindromes = function(string) {
  const cleanString = string.replace(/\W/gi, '').toLowerCase()
  let lastIndex = cleanString.length - 1
  let palindrome = true 

  for(i = 0; i <= cleanString.length/2; i++){
    if (cleanString.charAt(i) != cleanString.charAt(lastIndex - i)) {
      palindrome = false
    }
  }
  return palindrome
}

module.exports = palindromes
