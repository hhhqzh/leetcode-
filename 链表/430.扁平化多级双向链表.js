/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// var flatten = function (head) {

//     const dfs = (head) => {
//         if (head === null)
//             return head;
//         let node = head;
//         while (node !== null) {
//             while (node !== null && node.child === null) {
//                 node = node.next;
//             }
//             if (node !== null) {
//                 let child = dfs(node.child);
//                 let next = node.next;
//                 node.next = child;
//                 child.prev = node;
//                 if (next !== null) {
//                     while (child.next !== null)
//                         child = child.next;
//                     child.next = next;
//                     next.prev = child;
//                 }
//                 node.child = null;
//                 node = next;
//             }
//         }
//         return head;
//     }

//     dfs(head);

//     return head;
// };

// 把链表看成二叉树，先序遍历
var flatten = function (head) {
    if (!head)
        return head;

    let res = [];

    const preOrder = (head) => {
        if (!head)
            return;
        res.push(head);
        preOrder(head.child);
        preOrder(head.next);
    }

    preOrder(head);

    let node = head;
    for (let i = 1; i < res.length; ++i) {
        node.next = res[i];
        res[i].prev = node;
        node.child = null;
        node = node.next;
    }

    return head;
}