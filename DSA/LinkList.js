class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SinglyLinkList {
    constructor() {
        this.head = null
    }

    push(data) {
        const newData = new Node(data)
        if (!this.head) {
            this.head = newData
            return
        }
        let currenData = this.head
        while (currenData.next) {
            currenData = currenData.next
        }
        currenData.next = newData
    }

    // Remove node from the end

    pop() {
        if (!this.head) {
            return null
        }
        if (!this.head.next) {
            const value = this.head.data
            this.head = null
            return value
        }

        let current = this.head
        let previous = null
        while (current.next) {
            previous = current
            current = current.next
        }
        let value = current.data
        previous.next = null
        return value
    }

    // Remove From any Index
    popNthIndex(index) {
        if (!this.head) {
            return null
        }
        if (index < 0) {
            return null
        }

        if (index === 0) {
            const value = this.head.data
            this.head = this.head.next
            return value
        }
        let current = this.head
        let previous = null
        let i = 0
        while (i < index) {
            previous = current
            current = current.next
            i++


        }
        previous.next = current.next
        return current.data

    }

    // Print the value

    print() {
        let current = this.head
        let result = ""
        while (current) {
            result = result + current.data + "->"
            current = current.next
        }
        console.log(result)
    }
}
const list = new SinglyLinkList();
list.push(10);
list.push(20);
list.push(30);
list.popNthIndex(2);
list.print();
