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
    vector<int> postorderTraversal(TreeNode* root) {
        // vector<int> res;
        // if(!root)
        //     return res;
        // stack<TreeNode*> s;
        // TreeNode* p = root;
        // TreeNode* pre;
        // while(p || !s.empty()){
        //     if(p) {
        //         s.push(p);
        //         p = p->left;
        //     } else {
        //         p = s.top();
        //         // 有孩子为空且左节点已访问
        //         if(!p->right && p->left == pre){
        //             res.push_back(p->val);
        //             pre = p;
        //             s.pop();
        //             p = NULL;
        //         }
        //         else
        //             p = p->right;
        //     }
        // }
        // return res;
        vector<int> ret;
        stack<TreeNode*> s;
        s.push(root);
        while (!s.empty()) {
            TreeNode* node = s.top();
            s.pop();
            if (node == NULL) continue;
            ret.push_back(node->val);
            s.push(node->left);
            s.push(node->right);
        }
        int n = ret.size();
        for(int i=0; i < n / 2; ++i){
            int temp = ret[i];
            ret[i] = ret[n-i-1];
            ret[n-i-1] = temp;
        }
        return ret;
    }
};