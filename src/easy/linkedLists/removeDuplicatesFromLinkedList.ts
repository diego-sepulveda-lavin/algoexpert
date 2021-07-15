/* 
    Remove Duplicates From Linked List
    You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values.
    Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values.
    The Linked List should be modified in place (i.e. you shouln't create abrand new list), and the modified Linked List should still have
    its nodes sorted with respect to their values.

    Each "LinkedList" node has an integer "value" as well as a "next" pointin to the next node in the list or to "None/Null" if it's the
    tail of the list.

    Sample Input
    linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1

    Sample Output
    1 -> 3 -> 4 -> 5 -> 6 // the head node with value 1
*/

// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n)T
function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let leftPointer: LinkedList | null = linkedList; //init a left pointer
  // iterate until end of linkedList
  while (leftPointer !== null) {
    let rightPointer: LinkedList | null = leftPointer.next; //init a second pointer which starts to the right of leftPointer
    // Do while right pointer does not reach end of Linked List and left value is equal to right value
    while (rightPointer != null && leftPointer.value === rightPointer.value) {
      rightPointer = rightPointer.next; //move right pointer
    }
    // if left and right values are different, we make left pointer to point towards right current element, eliminating duplicated elements
    leftPointer.next = rightPointer;
    leftPointer = rightPointer; // we move left pointer where right pointer is, and start again with next value
  }
  return linkedList;
}
