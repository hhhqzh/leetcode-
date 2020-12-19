// 从最外圈开始旋转，每遍历一层就往里缩一个矩阵
class Solution {
    public void rotate(int[][] matrix) {
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0)
            return;
        int row = matrix.length - 1, col = matrix[0].length - 1;
        int rowF = row, colF = col;
        for(int r = 0; r < rowF; ++r){
            for(int c = r; c < colF; ++c){
                int x1 = r;
                int y1 = c;

                int x2 = c;
                int y2 = col - r;

                int x3 = row - r;
                int y3 = col -c;

                int x4 = row - c;
                int y4 = r;

                swap(matrix, x1, y1, x2, y2);
                swap(matrix, x1, y1, x3, y3);
                swap(matrix, x1, y1, x4, y4);
            }
            --rowF;
            --colF;
        }        
    }

    public void swap(int[][] matrix, int x1, int y1, int x2, int y2){
        int temp = matrix[x1][y1];
        matrix[x1][y1] = matrix[x2][y2];
        matrix[x2][y2] = temp;
        return;
    }
}

// 解法二：先转置再镜像
class Solution {
    public void rotate(int[][] matrix) {
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0)
            return;
        int n = matrix.length;
        for(int i = 0; i < n; ++i){
            for(int j = i; j < n; ++j){
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        for(int i = 0; i < n; ++i){
            for(int j = 0; j < n / 2; ++j){
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - j - 1];
                matrix[i][n - j - 1] = temp;
            }
        }
        return;
    }

}