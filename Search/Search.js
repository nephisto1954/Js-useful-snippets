  // using Devide and Conquer tactics

  function search(array, val) {

    //       declare start and finish point
    let min = 0;
    let max = array.length - 1;

    // will loop to see if the value we search is higher or lower than the middle point.
    // if it is less that middle, forget anything above and set middle-1 as the max and repeat
    // until we find the value... if cant find return -1
    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];

      if (array[middle] < val) {
        min = middle + 1;
      } else if (array[middle] > val) {
        max = middle - 1
      } else {
        return middle
      }
    }
    //       if not found return -1
    return -1
  }

  //   array need to be sorted!!!