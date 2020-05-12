// Recursive method with helper structure pattern.

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    //      Base case (break point)
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      //      if the modulo is not 0 than it is odd number so push to result.
      result.push(helperInput[0])
    }

    //      create loop by calling itself but with removing the first element of the arr.    
    helper(helperInput.slice(1))
  }
  //  initial call of the helper method with the initial arr
  helper(arr)
  //  don't forget to return the result!
  return result;
}


collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// The pure recursion version
function collectOddValues(arr) {
  let newArr = [];

  // base case (break point)
  if (arr.length === 0) {
    return newArr;
  }
  // Logic
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // call itself with change of input
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  // return the result when finished.
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);