// Radix sort is not a comparition sort but an integer sort.
// time complexity O(nk). k is length of digit. Space complexity O(n+k)


// First Helper Methods

// This helper will deal with finding the positioning of the digit we want in that number
// for example getDigit(7342, 2) will give 3, getDigit(7341, 4) will give 7... Works right to left, base 10!
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// This helper will count the digits in a given number. for example digitCount(1587) will return 4...
// this will help to see how often we need to run the Radix Sort.
// Math.log10(1587) will return 3.2005769267548483. Then floor that will give 3. than add 1 to get 4.
// Math.abs is to deal with passing negative numbers.
function digitCount(num) {
  //special case for handling 0!
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//This will loop over array, and return the number with the most digits.
function mostDigits(nums) {
  let maxDigits = 0;
  // looping and updating maxDigits as it goes
  for (let i = 0; i < nums.length; i++) {
    //Math.max will return the largest out of two numbers, then we assign that to maxDigits
    // Math.max(10, 12) will return 12. In this case we are passing digitCount which will give us a number.
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}



// Now Radix sort

function radixSort(nums) {
  //first find out was it the number with the most digits to get the number of time we will need to loop.
  let maxDigitsCount = mostDigits(nums);

  for (let k = 0; k < maxDigitsCount; k++) {
    //This is a neat method to create 10 empty subarrays! first part gives the amount, the second part give the structure for each.
    let digitBuckets = Array.from({
      length: 10
    }, () => []);
    //now loop over every number in the original array and put them in relevant buckets
    for (let i = 0; i < nums.length; i++) {
      //this will get a digit and push it into the bucket with the same number. for example 318, will push into bucket 8 if its the first iteration!
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // this will rebuild the array without looping. spread operator flattens the buckets. ending up with one array again.
    nums = [].concat(...digitBuckets);
  }
  //return the sorted array.
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);