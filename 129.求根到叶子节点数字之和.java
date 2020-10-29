/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int sum = 0;

    public int sumNumbers(TreeNode root) {
        preOrder(root, 0);
        return sum;
    }

    public void preOrder(TreeNode root, int cur){
        if(root != null){
            cur = cur * 10 + root.val;
            preOrder(root.left, cur);
            preOrder(root.right, cur);
            if(root.left == null && root.right == null){
                sum += cur;
            }
            cur = (cur - root.val) / 10;
        } 
    }
}