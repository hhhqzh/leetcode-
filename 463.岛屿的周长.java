// class Solution {
//     public int islandPerimeter(int[][] grid) {
//         int len1 = grid.length;
//         int len2 = grid[0].length;
//         int[][] Grid = new int[len1 + 2][len2 + 2];
//         for(int i = 1; i <= len1; ++i){
//             for(int j = 1; j <= len2; ++j)
//                 Grid[i][j] = grid[i - 1][j - 1];
//         }
//         int count = 0;
//         for(int i = 1; i <= len1; ++i){
//             for(int j = 1; j <= len2; ++j){
//                 if(Grid[i][j] == 1){
//                     if(Grid[i - 1][j] == 0)
//                         ++count;
//                     if(Grid[i][j - 1] == 0)
//                         ++count;
//                     if(Grid[i + 1][j] == 0)
//                         ++count;
//                     if(Grid[i][j + 1] == 0)
//                         ++count;
//                 }
//             }
//         }
//         return count;
//     }
// }

class Solution {
    public int islandPerimeter(int[][] grid) {
        if(grid == null || grid.length == 0)
            return 0;
        int count = 0;
        for(int i = 0; i < grid.length; ++i){
            for(int j = 0; j < grid[0].length; ++j){
                if(grid[i][j] == 1){
                    count += 4;
                    if(i > 0 && grid[i - 1][j] == 1)
                        count -= 2;
                    if(j > 0 && grid[i][j - 1] == 1)
                        count -= 2;
                }
            }
        }
        return count;
    }
}