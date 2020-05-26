// recreate a stack structure using singlylinkedlist. LIFO style

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    //if no node, assign first and last to the new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //otherwise store the current first node into temp var
      var temp = this.first;
      //set first node to the new node
      this.first = newNode;
      // set first.next to the old first node
      this.first.next = temp;
    }
    //increment and return the size of the stack
    return ++this.size;
  }

  pop() {
    //deals with empty stack
    if (!this.first) return null;
    //store first node in variable
    var temp = this.first;
    //if only one node, set last to null. edge case
    if (this.first === this.last) {
      this.last = null;
    }
    //reassign the first node to be what comes next
    this.first = this.first.next;
    //decrement the size
    this.size--;
    //return the value of the node removed.
    return temp.value;
  }
}