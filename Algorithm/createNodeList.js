class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }
}

function createLinkedList( initialValue,length) {
    if (initialValue.length === 0) {
        return null;
    }
    let head = new ListNode(initialValue[0]);
    let currentNode = head;
    const finLength=(initialValue.length-length)?length:initialValue.length
    for (let i = 1; i < finLength; i++) {
        currentNode.next = new ListNode(initialValue[i]||null);
        currentNode = currentNode.next;
    }
    return head;
}


