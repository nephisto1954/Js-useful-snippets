function factorial(num) {

  let result = 0;

  function helper(int) {

    while (int >= 0) {
      if (int === 0) return 1;
      result = result * int;
      int--
      helper(int)
      return result
    }
  }
  return helper(num)
}

factorial(4);

// solution
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}