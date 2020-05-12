// given 2 strings write a function to determine if the second string is an annagram of the 1st one.

// annagram require the same length of string and the same frequency of characters

function isAnnagram(str1, str2) {
  // first need to check if the size of str1 and str2 the same, otherwise not Annagram
  if (str1.length !== str2.length) {
    return false;
  }

  // create an obj for str1 frequencies and an obj for str2 frenquencies
  let str1FrequencyObj = {};
  let str2FrequencyObj = {};

  // loop over str1 and push to str1 frequency obj
  for (let char of str1) {
    str1FrequencyObj[char] = (str1FrequencyObj[char] || 0) + 1;
    console.log(str1FrequencyObj);
  }

  // loop over str2 and push to str2 frequency obj
  for (let char of str2) {
    str2FrequencyObj[char] = (str2FrequencyObj[char] || 0) + 1;
    console.log(str2FrequencyObj);
  }
  // compare the two obj. if have the same key/value pairs and frequency than Annagram otherwise false 
  for (let char in str1FrequencyObj) {
    console.log(str2FrequencyObj[char], char)
    console.log(char)
    if (char == str2FrequencyObj) {
      console.log("present")
    }
  }


}

isAnnagram("hello", "hello")


// a better way is:
let loookup = {};

for (let i = 0; i < str1.length; i++) {
  let letter = str1[i];
  //if lookup[letter] exist, increment, otherwise add to list.     
  lookup[letter] ? lookup[letter] += 1 : loookup[letter] = 1;
}

for (let i = 0; i < str2.length; i++) {
  let letter = str2[i];
  //     can't find letter or letter is zero then it's not anagram
  if (!lookup[letter]) {
    return false;
  } else {
    lookup[letter] -= 1;
  }
  return true;
}