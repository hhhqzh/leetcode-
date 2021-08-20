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
 * @return {TreeNode}
 */
 var sortedListToBST = function (head) {

    const createTree = (head) => {
        if (head == null)
            return null;
        let pre = null;
        let slow = head;
        let fast = head.next;
        if (fast != null)
            fast = fast.next;
        while (fast != null) {
            pre = slow;
            slow = slow.next;
            fast = fast.next;
            if (fast != null)
                fast = fast.next;
        }
        let node = new TreeNode(slow.val);
        if (pre == null)
            node.left = null;
        else {
            pre.next = null;
            node.left = createTree(head);
        }
        node.right = createTree(slow.next);
        return node;
    }

    return createTree(head);
};