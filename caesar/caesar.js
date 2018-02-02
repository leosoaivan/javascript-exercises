var caesar = function(string, shift = 0) {
  let shifted = []

  for(i = 0; i < string.length; i++) {
    if (/\w/.test(string.charAt(i))) {
      let startCode = /[a-z]/.test(string.charAt(i)) ? 97 : 65
      let endCode = /[a-z]/.test(string.charAt(i)) ? 122 : 90
      let wrappedShift = 0
      let newUnicode = 0

      if (shift > 0) {
        wrappedShift = string.charCodeAt(i) + shift - startCode
        newUnicode = wrappedShift % 26 + startCode
      } else {
        wrappedShift = string.charCodeAt(i) + shift - endCode
        newUnicode = wrappedShift % 26 + endCode
      }
      shifted.push(String.fromCharCode(newUnicode))
    } else {
      shifted.push(string.charAt(i))
    }
  }
  return shifted.join('')
}

module.exports = caesar
