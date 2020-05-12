// If bubbleSort is not optimized, O(n2). If optimized more like O(n) if arr almost sorted.

function bubbleSort(arr) {
  // decreasing loop
  for (var i = arr.length; i > 0; i--) {
    // nested loop with i as lenght to get shorter array each time round
    for (var j = 0; j < i - 1; j++) {
      // Compare j and what comes next: j+1
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


bubbleSort([15, 3, 37, 16, 49]);

// es2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([15, 3, 37, 16, 49, 7, -2]);


// Optimized version to reduce number of iterations if sorted from almost the beginning
function bubbleSort(arr) {
  // create short-circuit     
  var noSwaps;
  // decreasing loop
  for (var i = arr.length; i > 0; i--) {
    // set the noswap to true automatically  
    noSwaps = true;
    // nested loop with i as lenght to get shorter array each time round
    for (var j = 0; j < i - 1; j++) {
      // Compare j and what comes next: j+1
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // if swap has happened change noswap to false
        noSwaps = false;
      }
    }
    // as soon as a loop does not perform a swap it will stop iterating.
    if (noSwaps) break;
  }
  return arr;
}


bubbleSort([15, 3, 37, 16, 49]);



// Optimized es2015 Version 
function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([15, 3, 37, 16, 49, 7, -2]);