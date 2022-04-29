/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    const dfs = (grid, x, y, offset) => {
        if (offset <= 0) {
            return null;
        }
        for (let i = x; i < x + offset; ++i) {
            for (let j = y; j < y + offset; ++j) {
                // 不是叶子节点
                if (grid[i][j] !== grid[x][y]) {
                    let t = Math.floor(offset / 2);
                    return new Node(grid[x][y], false,
                        dfs(grid, x, y, t),
                        dfs(grid, x, y + t, t),
                        dfs(grid, x + t, y, t),
                        dfs(grid, x + t, y + t, t)
                    );
                }
            }
        }
        // 叶子节点
        return new Node(grid[x][y], true, null, null, null, null);
    }

    return dfs(grid, 0, 0, grid.length);
};