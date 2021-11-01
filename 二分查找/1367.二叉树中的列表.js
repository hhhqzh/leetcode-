/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    const check = (root, head) => {
        if (head === null)
            return true;
        if (root === null)
            return false;
        if (root.val !== head.val)
            return false;
        return check(root.left, head.next) || check(root.right, head.next);
    }

    if (head === null)
        return true;
    if (root === null)
        return false;
    return check(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
};