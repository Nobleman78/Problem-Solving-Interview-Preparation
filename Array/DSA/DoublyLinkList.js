class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtFirst(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    insertAtNthPosition(value, position) {
        const newNode = new Node(value)
        if (!this.head) {
            if (position === 0) {
                this.head = newNode;
            }
        }
        else {
           return
        }

        /* Insert At the beginning*/
        if (position === 0) {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            return
        }
        let current = this.head
        let index = 0;
        while (current && index < position - 1) {
            current = current.next
            index++

        }
        if (!current || (!current.next && index < position - 1)) {
            return
        }
        // Insert At the End
        if (!current.next) {
            current.next = newNode
            newNode.prev = current
            this.tail = newNode

        }
        const nextNode = current.next
        newNode.next = nextNode
        nextNode.prev = newNode
        newNode.prev = current
        current.next = newNode

    }
    //Delete from the link list

    delete(value) {
        if (!this.head && !this.tail) {
            return
        }
        if (this.head.value === value) {
            this.head = this.head.next
            return
        }
        let current = this.head
        while (current.next && current.next.value !== value) {
            current = current.next
        }
        if (current.next) {
            current.next = current.next.next
        }

    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const list = new DoublyLinkedList()
list.insertAtFirst(10)
list.insertAtFirst(20)
list.insertAtFirst(30)
list.insertAtFirst(40)
list.insertAtEnd(50)
list.delete(30)
list.delete(50)
list.insertAtNthPosition(2, 29)
list.print()