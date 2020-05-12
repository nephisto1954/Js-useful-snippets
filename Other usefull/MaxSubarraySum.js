function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let subArray = 0;

  for (y = 0; y < num; y++) {
    subArray += arr[y]
  }
  console.log("subArray", subArray);
}

maxSubarraySum([4, 1, 2, 3, 4, 5, 6], 3)



// solution
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}