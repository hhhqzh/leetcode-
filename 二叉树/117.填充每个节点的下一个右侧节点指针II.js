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
 var connect = function (root) {
    if (root == null || (root.left == null && root.right == null))
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

    // 进阶 
    
    // 空间复杂度为O(1)
    // let leftMost = root;
    // while (true) {
    //     let head = leftMost;
    //     let nextHead = null;
    //     while (head != null) {
    //         let temp = null;
    //         if (head.left != null) {
    //             if (nextHead == null)
    //                 nextHead = head.left;
    //             if (head.right != null)
    //                 head.left.next = head.right;
    //             else {
    //                 temp = head.next;
    //                 while (temp != null && temp.left == null && temp.right == null)
    //                     temp = temp.next;
    //                 if (temp != null)
    //                     head.left.next = temp.left == null ? temp.right : temp.left;
    //             }
    //         }
    //         if (head.right != null) {
    //             if (nextHead == null)
    //                 nextHead = head.right;
    //             temp = head.next;
    //             while (temp != null && temp.left == null && temp.right == null)
    //                 temp = temp.next;
    //             if (temp != null)
    //                 head.right.next = temp.left == null ? temp.right : temp.left;
    //         }
    //         head = head.next;
    //     }
    //     leftMost = nextHead;
    //     if (nextHead == null)
    //         break;
    // }

    // 进阶 递归

    const dfs = (root) => {
        if (root == null)
            return root;
        if (root.left != null && root.right != null)
            root.left.next = root.right;
        if (root.left != null && root.right == null)
            root.left.next = getNext(root.next);
        if (root.right != null)
            root.right.next = getNext(root.next);
        dfs(root.right);
        dfs(root.left);
        return root;
    }

    const getNext = (root) =>{
        if (root == null)
            return null;
        if (root.left != null)
            return root.left;
        if (root.right != null)
            return root.right;
        if (root.next != null)
            return getNext(root.next);
        return null;
    }

    return dfs(root);
};