var sumAll = function(...nums) {
  let sum = 0

  if (nums.some(x => typeof x !== 'number' || x < 0 )) {
    sum = "ERROR";
  } else {
    nums.sort(function(a, b) {
      return a - b;
    });

    for (i = nums[0]; i <= nums[1]; i++) {
      sum += i;
    }
  };

  return sum;
}

module.exports = sumAll
