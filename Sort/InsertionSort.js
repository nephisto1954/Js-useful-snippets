// Time complexity of O(n2) but if nearly sorted than not to bad. Worst case is a decreasing ordered array!


function insertionSort(arr) {
  // make it start at index1 of the array
  for (var i = 1; i < arr.length; i++) {
    //store value of current interation cause will be used later
    var currentVal = arr[i];

    //we want to loop over all items before currentVal so j is i-1. 
    //the && part makes sure we stop if the value less than currentVal
    //prevents unnecessary loops
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //this will reorder when needed 
      arr[j + 1] = arr[j];
    }
    //when loop is done than we need to assign the correct index to the value
    arr[j + 1] = currentVal;
  }
  return arr;
}


insertionSort([2, 1, 9, 76, 4]);