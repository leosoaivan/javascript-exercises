var repeatString = function(string, count) {
  let result = "";
  
  if (count <= 0) {
    count === 0 ? result : result += "ERROR";
  } else {
    while (count) {
      result += string;
      count--
    }
  }

  return result;
}

module.exports = repeatString
