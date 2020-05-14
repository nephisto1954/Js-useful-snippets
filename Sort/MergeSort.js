// Time complexity of O(n log n), sapce complexity O(n)

// Split unsorted array into smallest arrays possible, than compare, reassemble, compare, reassemble... until fully sorted!

// Rebuild array whilst sorting the elements
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  // need to loop considering the both arrays
  while (i < arr1.length && j < arr2.length) {
    //compare items from both arrays
    if (arr2[j] > arr1[i]) {
      //if value in second array is higher than value in first array, push first array value to the result array.
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //to prevent missing data if one array is shorter than the other, here are helper functions
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// deconstruct array!
function mergeSort(arr) {
  //this stop the loop if the item is not splitable anymore
  if (arr.length <= 1) return arr;
  //find the mid point of the arr given
  let mid = Math.floor(arr.length / 2);
  //if you don't wrap the "arr.slice90,mid" inside the mergeSort() recursive callback, it will do it once only
  let left = mergeSort(arr.slice(0, mid));
  // same logic for the right side
  let right = mergeSort(arr.slice(mid));
  //feed the results into the merge function to reassemble the array together
  return merge(left, right);
}

mergeSort([1, 10, 50, 2, 14, 99, 100]);