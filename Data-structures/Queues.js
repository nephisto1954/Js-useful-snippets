// recreate a queue structure using singlylinkedlist. FIFO style

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    //same functionality as push
    var newNode = new Node(val);
    //if empty list, set new node to be first and last
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //set current last.next to the new node
      this.last.next = newNode;
      //reassign the last node to be the inserted node
      this.last = newNode;
    }
    //increment the size of queue and return the value
    return ++this.size;
  }

  dequeue() {
    //same functionality as shift
    if (!this.first) return null;
    // store current first node in var
    var temp = this.first;
    //if only one node, set last to null. edge case
    if (this.fist === this.last) {
      this.last = null;
    }
    //assign the current first.next to be the new first node
    this.first = this.first.next;
    //decrease size
    this.size--;
    //return the value of the node removed
    return temp.value;

  }
}