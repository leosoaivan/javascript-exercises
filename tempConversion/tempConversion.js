var ftoc = function(temp) {
  let result = ((temp - 32) * 5/9).toFixed(1)
  return Number(result)
}

var ctof = function(temp) {
  let result = ((temp * 9/5) + 32).toFixed(1)
  return Number(result)
}

module.exports = {
  ftoc,
  ctof
}
