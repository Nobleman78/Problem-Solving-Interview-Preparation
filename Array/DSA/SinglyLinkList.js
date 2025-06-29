class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class SinglyLinkList {
    constructor() {
        this.head = null
    }
    insert(value) {
        const newNodde = new Node(value)
        if (!this.head) {
            this.head = newNodde
        }
        else {
            let currentDAata = this.head
            while (currentDAata.next) {
                currentDAata = currentDAata.next
            }
            currentDAata.next = newNodde
        }

    }
    delete(value) {
        if (!this.head) {
            return
        }
        if (this.head.value === value) {
            this.head = this.head.next
            return

        }
        let curr = this.head
        while (curr.next && curr.next.value !== value) {
            curr = curr.next
        }
        if (curr.next) {
            curr.next = curr.next.next
        }

    }

    update(prevValue, nextValue) {

        let curr = this.head
        while (curr) {
            if (curr.value === prevValue) {
                curr.value = nextValue
                return
            }
            curr = curr.next

        }

    }
    print() {
        let curr = this.head
        let str = '';
        while (curr) {
            str = str + curr.value + '->'
            curr = curr.next
        }
        console.log(str + 'null')
    }
}
const list = new SinglyLinkList();
list.insert(1);
list.insert(2);
list.insert(3);
list.delete(3)
list.update(2, 500)
list.print();
