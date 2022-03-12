/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if (root == null)
        return root;

    // 层次遍历
    // let queue = [root];
    // while (queue.length) {
    //     let size = queue.length;
    //     let temp = null;
    //     let pre = null;
    //     while(size--) {
    //         temp = queue.shift();
    //         if (temp.left)
    //             queue.push(temp.left);
    //         if (temp.right)
    //             queue.push(temp.right);
    //         if (pre != null)
    //             pre.next = temp;
    //         pre = temp;
    //     }
    // }

    let curLeftMost = root;
    while (curLeftMost.left != null) {
        let head = curLeftMost;
        while (head != null) {
            head.left.next = head.right; 
            if (head.next != null) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        curLeftMost = curLeftMost.left;
    }

    return root;
};