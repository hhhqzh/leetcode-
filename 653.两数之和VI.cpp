/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> order;
    map<int, int> res;

    bool findTarget(TreeNode* root, int k) {
        // 中序遍历，使用双指针
        if(!root)
            return false;
        inOrder(root);
        int i = 0, j = order.size() - 1;
        while(i < j){
            if(order[i] + order[j] == k)
                return true;
            else if(order[i] + order[j] > k)
                --j;
            else
                ++i;
        }
        return false;

       // 遍历每一个子树，判断是否存在有k-root->val的值，有则因为真 
        // if(!root)
        //     return false;
        // if(res[k - root->val])
        //     return true;
        // res[root->val] = 1;
        // return findTarget(root->left, k) || findTarget(root->right, k);
    }

    void inOrder(TreeNode* root){
        if(!root)  return;
        inOrder(root->left);
        order.push_back(root->val);
        inOrder(root->right);
    }
};