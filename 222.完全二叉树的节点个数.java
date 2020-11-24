// 大佬的算法真的强

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
    public int countNodes(TreeNode root) {
        if(root == null) return 0;
        int lh = getDepth(root.left);
        int rh = getDepth(root.right);
        if(lh == rh)    return (1 << lh) + countNodes(root.right); // 高度为 1（根） + （2^h - 1）左子树节点数 + 右子树节点数
        else    return (1 << rh) + countNodes(root.left);
    }
    
    public int getDepth(TreeNode root){
        int depth = 0;
        while(root != null){
            ++depth;
            root = root.left;
        }
        return depth;
    }
}