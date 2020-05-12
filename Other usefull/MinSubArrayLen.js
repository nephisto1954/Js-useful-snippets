function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {

    //     if current window doesnt add up to the given sum then
    //     move the window to the right

    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }

    //      if the current window addup to at least the sum given
    //      we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    //      current total less than requirent total but we can reach the
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}