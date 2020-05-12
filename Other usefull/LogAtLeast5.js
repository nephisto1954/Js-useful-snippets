function logAtLeast5(n) {
  // the Math.max will select the biggest number between 5 and n.
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(3);