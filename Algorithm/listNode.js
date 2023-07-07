class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 在链表头部插入元素
  insertFirst(val) {
    this.head = new ListNode(val, this.head);
    this.size++;
  }

  // 在链表尾部插入元素
  insertLast(val) {
    const node = new ListNode(val);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  // 在指定位置插入元素
  insertAt(val, index) {
    if (index < 0 || index > this.size) {
      return console.log('Invalid index');
    }

    if (index === 0) {
      return this.insertFirst(val);
    }

    const node = new ListNode(val);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // 获取指定位置的元素
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.val;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // 删除指定位置的元素
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return console.log('Invalid index');
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // 清空链表
  clear() {
    this.head = null;
    this.size = 0;
  }

  // 输出链表元素
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}