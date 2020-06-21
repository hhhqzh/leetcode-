class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix) {
        // int row = matrix.size();
        // int col = matrix[0].size();
        // for(int i = 0; i < row; ++i){
        //     int r = i;
        //     int c = 0;
        //     while(r + 1 < row && c + 1 < col){
        //         if(matrix[r][c] != matrix[r + 1][c + 1])
        //             return false;
        //         ++r;
        //         ++c;
        //     }
        // }
        // for(int i = 1; i < col; ++i){
        //     int c = i;
        //     int r = 0;
        //     while(r + 1 < row && c + 1 < col){
        //         if(matrix[r][c] != matrix[r + 1][c + 1])
        //             return false;
        //         ++r;
        //         ++c;
        //     }
        // }
        for(int i=0;i<matrix.size()-1;i++){
            for(int j=0;j<matrix[0].size()-1;j++){
                if(matrix[i][j] != matrix[i+1][j+1]){
                    return false;
                }
            }
        }
        return true;
    }
};