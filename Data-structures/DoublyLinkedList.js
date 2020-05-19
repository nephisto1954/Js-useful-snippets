class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //declare a new node
    var newNode = new Node(val);
    if (this.length === 0) {
      // if empty list, set both head and tail to be the newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      //create link between existing tail and newNode
      this.tail.next = newNode;
      //link the newNode back to the current tail
      newNode.prev = this.tail;
      //set the tail to be the newNode 
      this.tail = newNode;
    }
    //increase the length
    this.length++;
    //return the entire list
    return this;
  }

  pop() {
    //short circuit for empty list
    if (!this.head) return undefined;
    //declare a var for the node we want to remove
    var poppedNode = this.tail;
    // handling for when list only has 1 node 
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //reassign the tail to the prev element of the node we want to remove
      this.tail = poppedNode.prev;
      //remove the link to the node we want to remove
      this.tail.next = null;
      //also need to remove the prev link from the node we are removing. hence removing the two way binding.
      poppedNode.prev = null;
    }
    //decrement the size of the list
    this.length--;
    //return the removed element
    return poppedNode;

  }

  shift() {
    //short circuit for empty list
    if (!this.head) return undefined;
    //store the old head in a var
    var oldHead = this.head;
    //handle list with only 1 node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //set the head to be the next node from the current head
      this.head = oldHead.next;
      //sever the link from the current head to the next node
      oldHead.next = null;
      //sever the link from the future head to the old head
      this.head.prev = null;
    }

    //reduce the lenght
    this.lenght--;
    //return the removed node
    return oldHead;
  }

  unshift(val) {
    //declare a var with the new node value
    var newNode = new Node(val);
    //handle list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //create the first bond between the old head and the new head
      this.head.prev = newNode;
      //create the second bond between the old and the new head
      newNode.next = this.head;
      //reassign the head to be the new one
      this.head = newNode;
    }
    //increase the size of the list
    this.length++;
    //return the entire list
    return this;
  }

  get(index) {
    //handles negative index or index larger than the size of the list
    if (index < 0 || index >= this.length) return null;
    //declare the current and the count var
    var count, current;
    //optimising: will spit search based of whether the index is closer to the head or the tail.
    //this is when the index is closer to the head
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      //this is when the index is closer to the tail.
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    //use the get method to find the node to update and store it in a var
    var foundNode = this.get(index);
    //if the node is not empty, replace the value of it with the new value given and return true
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    //otherwise always return false
    return false;
  }

  insert(index, val) {
    //handles any invalid index (too big or negative)
    if (index < 0 || index > this.length) return false;
    //if targetting the first node, use the unshift method we wrote previously. !! returns a boolean instead of the node
    if (index === 0) return !!this.unshift(val);
    //if targetting the last node, use the push method we wrote previously. !! returns a boolean instead of a node
    if (index === this.length) return !!this.push(val);

    //declare the new node and set it to a var.
    var newNode = new Node(val);
    //use the get method we wrote previously to find the node before the node we want to insert at so we can link the inserted node with the node before.
    var beforeNode = this.get(index - 1);
    //this refers to the link between the two nodes prior to the insertion. We will need beforeNode and afterNode for linking the inserted node to them
    var afterNode = beforeNode.next;

    //now make the new connections
    //start with creating two way binding between the beforeNode and the inserted node. below is same as putting on 2 lines
    beforeNode.next = newNode, newNode.prev = beforeNode;
    // now make the same two way binding with the afterNode. below is same as putting on 2 lines
    afterNode.prev = newNode, newNode.next = afterNode;

    //increment the length
    this.length++;
    //return true once done
    return true;
  }

  remove(index) {
    //handles any invalid index (too big or negative)
    if (index < 0 || index >= this.length) return undefined;
    //use shift method we wrote before if we want to remove the first node.
    if (index === 0) return this.shift();
    //take the lenght - 1 to the ge the last node position and use the pop method we wrote previously to handle that
    if (index === this.length - 1) return this.pop();


    //use the get method we wrote previously to find the node we want to remove
    var removedNode = this.get(index);
    //set the before and after node into vars so we can use them later for linking. easier to read. same as : removedNode.prev.next = removedNode.next, removedNode.next.prev = removedNode.prev;    
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    //make the double linking between the node that came before the removedNode and link it to the node that comes after the removedNode
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    //sever the links attached to the node we are removing
    removedNode.next = null;
    removedNode.prev = null;

    //reduce the length
    this.length--;
    //return the removedNode
    return removedNode;
  }

}