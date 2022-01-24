"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
class Nodes {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    get length() {
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
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bunds");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bunds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("Index out of bunds");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("Index out of bunds");
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(`${node.data} ==>`);
            node = node.next;
        }
    }
}
exports.default = LinkedList;
