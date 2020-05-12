function averagePair(arr, num) {
  let i = 0;
  let j = 1;

  for (x = 1; x < arr.length; x++) {
    let arg1 = arr[i];
    let arg2 = arr[j];
    let average = (arg1 + arg2) / 2;
    console.log("average: ", average, arg1, arg2)
    if (average === num) return true;
    i++
    j++
  }

  return false;
}


// averagePair([1,2,3], 2.5)
// averagePair([1,3,3,5,6,7,10,12,19], 8)
// averagePair([-1,0,3,4,5,6], 4.1)
// averagePair([], 4)


// Solution

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}