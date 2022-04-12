/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let map = new Map();
    let newHead = new Node(0, null, null);
    let p = newHead;
    while (head !== null) {
        let node = map.has(head) ? map.get(head) : new Node(head.val);
        if (!map.has(head)) {
            map.set(head, node);
        }
        p.next = node;
        if (head.random) {
            let random = map.has(head.random) ? map.get(head.random) : new Node(head.random.val);
            if (!map.has(head.random)) {
                map.set(head.random, random);
            }
            node.random = random;
        }
        head = head.next;
        p = p.next;
    }
    return newHead.next;
};

var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }
    let node = head;
    while (node !== null) {
        let newNode = new Node(node.val, node.next, null);
        node.next = newNode;
        node = node.next.next;
    }
    node = head;
    while (node !== null) {
        let newNode = node.next;
        newNode.random = node.random !== null ? node.random.next : null;
        node = node.next.next;
    }
    // 断链形成新链表
    let newHead = head.next;
    node = head;
    while (node !== null) {
        let temp = node.next;
        node.next = node.next.next;
        temp.next = temp.next !== null ? temp.next.next : null;
        node = node.next;
    }
    return newHead;
}