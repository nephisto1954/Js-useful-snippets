function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
    console.log(i, j);
  }
  return i + 1;
}


countUniqueValues([-4, -4, 2, 3, 5, 6])