import { Sorter } from "./Sorter";

class Nodes {
  next: Nodes | null = null;
  constructor(public data: number) {}
}

class LinkedList extends Sorter {
  head: Nodes | null = null;

  add(data: number): void {
    const node = new Nodes(data);

    /** if node is the first or head */
    if (!this.head) {
      this.head = node;
      return;
    }

    /** find the last node */
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    /** assign the last node */
    tail.next = node;
  }

  get length(): number {
    let len = 1;
    if (!this.head) {
      return 0;
    }

    let node = this.head;
    while (node.next) {
      len++;
      node = node.next;
    }

    return len;
  }

  at(index: number): Nodes {
    if (!this.head) {
      throw new Error("Index out of bunds");
    }

    let counter = 0;
    let node: Nodes | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bunds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("Index out of bunds");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error("Index out of bunds");
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Nodes | null = this.head;
    while (node) {
      console.log(`${node.data} ==>`);
      node = node.next;
    }
  }
}

export default LinkedList;
