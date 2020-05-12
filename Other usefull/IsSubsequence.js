function isSubsequence(str1, str2) {

  let collection = {};

  let i = 0;
  let j = 1;

  let a = 0;
  let b = 1;

  for (let x = 0; x < str1.length - 1; x++) {
    let concat1 = str1[i] + str1[j];
    collection[concat1] = concat1;
    i++;
    j++;
  }

  for (let x = 0; x < str2.length - 1; x++) {
    let concat2 = str2[a] + str2[b];
    a++;
    b++;
    if (collection[concat2] === concat2) return true;
  }
  return false;
}

// isSubsequence("hello", "hello world")
// isSubsequence("sing", "sting")
isSubsequence("abc", "abracadabra")
// isSubsequence("abc", "acb")



// Solution
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}


// other solution, recursive but not O(1)!
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}