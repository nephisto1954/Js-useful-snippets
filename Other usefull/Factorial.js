// Factorial is 10! => 10*9*8*7...

// iterative factorial
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}


// recursive factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// recursion requires a break point here it's "if (num === 1) return 1"
// and a callback to itself with a different input.
// here: "return num * factorial(num-1)"
// make sure to have a base case (break point) with a return!
// also make sure to return including callback. (minimum of 2 return in the recursive loop) 
// if you forget to return or have a valid base case, you will create a loop until the stack size is too big also known as
// stack overflow!