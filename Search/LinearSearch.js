//  Javascript methods such as : (indexOf, includes, find, findIndex) are all following a liner search approach.

// function linearSearch(arr, val){
// let result = 0;
// for (var x = 0; x < arr.length; x++) {
//   if (arr[x] === val) {
//     result = x;
//     return result;
//   }

//   if (arr[x] !== val) {
//     result = -1;
//   }
// }
// return result;
// }

// linearSearch([10,15,20,25,30], 15)
// linearSearch([9,8,7,6,5,4,3,2,1,0], 4)
// linearSearch([100], 100)
// linearSearch([1,2,3,4,5], 6)
// linearSearch([9,8,7,6,5,4,3,2,1,0], 1)
// linearSearch([100], 200)



// better version

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}


// linearSearch([10,15,20,25,30], 15)
// linearSearch([9,8,7,6,5,4,3,2,1,0], 4)
// linearSearch([100], 100)
// linearSearch([1,2,3,4,5], 6)
// linearSearch([9,8,7,6,5,4,3,2,1,0], 1)
// linearSearch([100], 200)