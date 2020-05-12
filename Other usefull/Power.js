function power(base, expo) {

  let result = 0;

  function helper(input) {

    if (input === 0) return result = 1;

    if (input >= base) {
      result += base * input
      helper(input - base)
    }
  }
  helper(expo);
  return result;
}


// power(2,0)// 1
// power(2,2)// 4
power(2, 4) // 16


// solution
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}