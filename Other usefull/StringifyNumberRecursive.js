function stringifyNumbers(obj) {
  var newOj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newOj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newOj[key] = stringifyNumbers(obj[key]);
    } else {
      newOj[key] = obj[key];
    }
  }
  return newOj;
}