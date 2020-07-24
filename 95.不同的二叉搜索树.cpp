/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

 /*
    以i为根，则其二叉搜索树的左子树leftchild为[left, i-1]组成，右子树rightchild为[i+1,right]组成。
    所以以i为根的二叉搜索树有leftchild.size()*rightchild.size()个
    当s>e时，则表示此事无节点可以生成子树，返回NULL
 */
class Solution {
public:
    vector<TreeNode*> generateTrees(int n) {
        vector<TreeNode*> res;
        if(n < 1)
            return res;
        res = help(1, n);
        return res;
    }

    vector<TreeNode*> help(int s, int e){
        vector<TreeNode*> res;
        if(s > e)
            res.push_back(nullptr);
        else {
            for(int i = s; i <= e; ++i){
                vector<TreeNode*> left = help(s, i - 1);
                vector<TreeNode*> right = help(i + 1, e);
                for(auto l : left){
                    for(auto r : right){
                        TreeNode* root = new TreeNode(i);
                        root->left = l;
                        root->right = r;
                        res.push_back(root);
                    }
                }
            }
        }
        return res;
    }
};