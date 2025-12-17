class ListNode<T> {
    // We may not have a next node (last node), so optional
    next?: ListNode<T>

    constructor(public data: T) { }
}

class LinkedList<T> {
    //root is not present at the beginning so optional
    private root?: ListNode<T>
    private tail?: ListNode<T>
    private length = 0

    add(data: T) {
        const newNode = new ListNode(data)
        if (this.length == 0) {
            this.root = newNode
            this.tail = newNode
        } else if (this.tail) {
            // We point 'next' of the old node to newNode
            this.tail.next = newNode
            // We point 'tail' to newNode
            this.tail = newNode
        }
        this.length++
    }

    get getLength() {
        return this.length
    }

    printList() {
        let current = this.root
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const numList = new LinkedList<number>()
numList.add(10)
numList.add(20)
numList.add(30)
numList.add(40)
numList.printList()

const strList = new LinkedList<string>()