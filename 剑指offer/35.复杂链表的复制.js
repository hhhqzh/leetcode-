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
// var copyRandomList = function (head) {
//     if (head === null)
//         return null;
//     let q = head;
//     let map = new Map();
//     let i = 0;
//     let arr = [];
//     while (q !== null) {
//         let node = new Node(q.val);
//         arr.push(node);
//         map.set(q, i++);
//         q = q.next;
//     }
//     q = head;
//     i = 0;
//     let n = null;
//     while (q !== null) {
//         let random = q.random;
//         if (!map.has(random)) {
//             arr[i].random = n;
//         } else {
//             let index = map.get(random);
//             arr[i].random = arr[index];
//         }
//         q = q.next;
//         ++i;
//     }
//     let j = 0;
//     for (; j <  arr.length - 1; ++j) {
//         arr[j].next = arr[j + 1];
//     }
//     arr[j].next = n;
//     return arr[0];
// };


var copyRandomList = function (head) {
    if (head === null)
        return null;
    let cur = head;
    // 链表节点复制
    while (cur !== null) {
        let copyCur = new Node(cur.val);
        copyCur.next = cur.next;
        cur.next = copyCur;
        cur = cur.next.next;
    }

    // 对链表复制节点的随机指针进行复制
    cur = head;
    while (cur !== null) {
        if (cur.random !== null) {
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next;
    }

    // 将链表一分为二
    let newHead = head.next;
    cur = head;
    let p = newHead;
    while (cur !== null) {
        cur.next = cur.next.next;
        cur = cur.next;
        if (p.next !== null) {
            p.next = p.next.next;
            p = p.next;
        }
    }
    return newHead;
}