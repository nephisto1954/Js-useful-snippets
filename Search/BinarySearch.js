// Binary search only good it arr is sorted otherwise for unsorted, Linear search is better.
// 



// function binarySearch(arr, val) {

//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);
//     console.log("middle : ", middle);

//     while (val !== arr[middle]){
//         console.log("left: ", left);
//         console.log("right: ", right);
//         console.log("Wmiddle : ", arr[middle]);
//         if (val < arr[middle]) {
//             console.log("less")
//             right = arr[middle];
//             return right;
//         } else if (val > arr[middle]) {
//             console.log("more")
//             left = arr[middle];
//             return left;
//         } else {
//             return "not found";
//         }
//     }
//     if (val === arr[middle]) return;
// }


// // binarySearch([1,2,3,4,5], 4)
// binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 30)


// // solution
// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);

//   // the "&& start <= end" is to prevent elem, not in the loop continuous flow
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }

//   if (arr[middle] === elem) {
//     return middle;
//   }
//   //   if not found in array return -1;
//   return -1;
// }


// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], -1);


// shorter solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  // the "&& start <= end" is to prevent elem, not in the loop continuous flow
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}


binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9);