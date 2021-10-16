/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    if (root === null)
        return root;
    let pre = null;
    let head = null;

    const inorder = (root) => {
        if (root === null)
            return;
        inorder(root.left);
        if (head === null) {
            head = root;
            pre = root;
        } else {
            pre.right = root;
            root.left = pre;
            pre = root;
        }
        inorder(root.right);
    }

    inorder(root);

    let p = head;
    while (p.right !== null)
        p = p.right;
    
    head.left = p;
    p.right = head;

    return head;
};