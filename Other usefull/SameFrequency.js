// function sameFrequency(num1, num2) {

// // convert integer to strings
//     let num3 = num1.toString();
//     let num4 = num2.toString();
// //     check if same length
//     if (num3.length !== num4.length){
//         return false;
//     }

// // Push char from num1 into object + counts
//     let frequencyObject = {};
//     for (let char of num3){
//        frequencyObject[char] = (frequencyObject[char] || 0) + 1;
//         console.log("num3: ", frequencyObject);
//     }
// // Check if char in num2 are present in object, if not return false
// // if true, remove 1 counter.
//     for (let char of num4){
//         frequencyObject[char] = (frequencyObject[char] || 0) - 1;
//         console.log("num4: ", frequencyObject);
//         if (frequencyObject[char] < 0){
//             return false;
//         }
//     }
//     return true;
// }

sameFrequency(222, 222)

// Another version
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;

}