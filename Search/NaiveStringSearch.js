function naiveStringSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(long[i], short[j]);
      if (short[j] !== long[i + j]) {
        console.log("BREAK!");
        break;
      }

      if (j === short.length - 1) {
        console.log("FOUND!");
        count++;
      }
    }
  }
  return count;
}


naiveStringSearch("heol hell", "hell");



// shorter version
function naiveStringSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}


naiveStringSearch("heol hell", "hell");