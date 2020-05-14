// Pivot helper method which will be used by quickSort
function pivot(arr, start = 0, end = arr.length + 1) {
  //standard swap function
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }


  var pivot = arr[start];
  //count variable...
  var swapIdx = start;

  // loop over array except first item
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      //if pivot is bigger than the iterated item, increase swapIdx count
      swapIdx++;
      //call the swap function passing the swapIdx and the current iteration
      swap(arr, swapIdx, i);
    }
  }
  //finaly swapping the starpoint with the last swapIdx to put the number in the right place
  swap(arr, start, swapIdx);
  return swapIdx;

}


// set default value so that when using recursion, can feed the neeed info as we progress through the loop
function quickSort(arr, left = 0, right = arr.length - 1) {

  //short circuit, as quickSort is recursive, left and right will change and become closer. this will stop when the are the same index.
  if (left < right) {
    //return the index value of the pivot after the first loop, which will be used as a base to compare the rest.
    var pivotIndex = pivot(arr, left, right);

    // Handle the left side of the pivot
    quickSort(arr, left, pivotIndex - 1);

    // Handle the right side of the pivot
    quickSort(arr, pivotIndex + 1, right);

  }

  //dont forget to return the arr.
  return arr;

}


quickSort([4, 8, 2, 1, 5, 7, 6, 3])










// es2015 version


// Pivot helper method which will be used by quickSort
function pivot(arr, start = 0, end = arr.length + 1) {
  //standard swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };


  let pivot = arr[start];
  //count variable...
  let swapIdx = start;

  // loop over array except first item
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      //if pivot is bigger than the iterated item, increase swapIdx count
      swapIdx++;
      //call the swap function passing the swapIdx and the current iteration
      swap(arr, swapIdx, i);
    }
  }
  //finaly swapping the starpoint with the last swapIdx to put the number in the right place
  swap(arr, start, swapIdx);
  return swapIdx;

}



// set default value so that when using recursion, can feed the neeed info as we progress through the loop
function quickSort(arr, left = 0, right = arr.length - 1) {

  //short circuit, as quickSort is recursive, left and right will change and become closer. this will stop when the are the same index.
  if (left < right) {
    //return the index value of the pivot after the first loop, which will be used as a base to compare the rest.
    let pivotIndex = pivot(arr, left, right);

    // Handle the left side of the pivot
    quickSort(arr, left, pivotIndex - 1);

    // Handle the right side of the pivot
    quickSort(arr, pivotIndex + 1, right);

  }

  //dont forget to return the arr.
  return arr;

}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);