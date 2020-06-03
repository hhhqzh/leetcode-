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
    vector<double> averageOfLevels(TreeNode* root) {
        // queue<TreeNode*> q;
        // TreeNode* lastNode = root;
        // TreeNode* newNode;
        // q.push(root);
        // double sum = 0;
        // int cnt = 0;
        // vector<double> res;
        // while(!q.empty()){
        //     TreeNode* temp  = q.front();
        //     q.pop();
        //     sum += temp->val;
        //     ++cnt;
        //     if(temp->left){
        //         q.push(temp->left);
        //         newNode = temp->left;
        //     }
        //     if(temp->right){
        //         q.push(temp->right);
        //         newNode = temp->right;
        //     }
        //     if(temp == lastNode){
        //         lastNode = newNode;
        //         res.push_back(sum / cnt);
        //         sum = 0;
        //         cnt = 0;
        //     }
        // }
        // return res;

        queue<TreeNode*>q;
        q.push(root);
        vector<double> res;
        int cnt;
        while(!q.empty()){
            cnt = q.size();
            double sum = 0;
            for(int i=0; i<cnt; ++i){
                TreeNode* t = q.front();
                q.pop();
                sum += t->val;
                if(t->left)
                    q.push(t->left);
                if(t->right)
                    q.push(t->right);
            }
            res.push_back(sum / cnt);
        }
        return res;
    }
};