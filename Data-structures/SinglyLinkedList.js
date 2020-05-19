// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


// var first = new Node("Hi")
// first.next = new Node('there')
// first.next.next = new Node("how are you")


class SinglyLinkedList {
  constructor() {
    //singlyLinkedList have a start(head) and an end(tail) and a length

    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //instance method (similar to array.push)
  push(val) {
    //declare variable 
    let value = new Node(val);

    //if list is empty
    if (!this.head) {
      this.head = value;
      this.tail = this.head;
    }
    //otherwise point to tail to the next node, and assign tail to be the new node    
    else {
      this.tail.next = value;
      this.tail = value;

    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    //loops continuously until current.next becomes undefined.
    while (current.next) {
      //reasssign all the values by moving to the next node
      newTail = current;
      current = current.next;
    }
    //assign the tail to the newly assign tail
    this.tail = newTail;
    //sever the link with the last tail
    this.tail.next = null;
    //decrement as list is one node shorter
    this.length--;
    // edge case, if no item in list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    //handles empty list
    if (!this.head) return undefined;
    //set head to a variable
    var currentHead = this.head;
    //set the head to be .next
    this.head = currentHead.next;
    //reduce length
    this.length--;
    // edge case, if no item in list
    if (this.length === 0) {
      this.tail = null;
    }
    //return the reduced list
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    // if empty, set head and tails
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //set next to be old head
      newNode.next = this.head;
      //set head to be new value
      this.head = newNode;
    }

    // increase length
    this.length++;
    //return the list
    return this;
  }


  get(index) {
    //deal with negative number and number bigger than length of list
    if (index < 0 || index >= this.length) return null;
    //set a counter
    var counter = 0;
    //set a starting point
    var current = this.head;
    while (counter !== index) {
      //set new point as you loop through items
      current = current.next;
      //increase counter until true
      counter++;
    }
    // return the value once found
    return current;
  }


  set(index, val) {
    //calls the get method and pass the index
    var foundNode = this.get(index);
    //if found, set its value to the value provided and return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    //otherwise not found and return false.
    return false;
  }

  insert(index, val) {
    // short circuit
    if (index < 0 || index > this.length) return false;
    // if eq to length then use push method as its for last item. !! returns a boolean instead of the list
    if (index = this.length) return !!this.push(val);
    // if eq to 0 then its first item so use unshift. !! returns a boolean instead of the list
    if (index === 0) return !!this.unshift(val);


    // use get method to find the node before the one we want to insert
    var prev = this.get(index - 1);
    //set a var to old the connection to the node coming after
    var temp = prev.next;
    //set the prev.next to our insert
    prev.next = newNode;
    // set our insert next to be the variable temp which holds the prev connection
    newNode.next = temp;
    //increase the length
    this.length++;
    //return true when done
    return true;
  }

  remove(index) {
    //short circuit if index not valid
    if (index < 0 || index >= this.length) return null;
    //if its the first item
    if (index === 0) return this.shift();
    //if it is the last item
    if (index === this.length) return this.pop();

    //find the node before our removal
    var previousNode = this.get(index - 1);
    //save the connection between node to a variable
    var removed = previousNode.next;
    //reassigned the connection
    previousNode.next = removed.next;
    //reduce the length of the list
    this.length--;

    //return the removed item!
    return removed;
  }

  reverse() {

  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

}

var list = new SinglyLinkedList();