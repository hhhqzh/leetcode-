// dp
class Solution {
    public int videoStitching(int[][] clips, int T) {
        int[] dp = new int[T + 1];
        Arrays.fill(dp, Integer.MAX_VALUE - 1);
        dp[0] = 0;
        for (int i = 1; i <= T; i++) {
            for (int[] clip : clips) {
                if (clip[0] < i && i <= clip[1]) {
                    dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
                }
            }
        }
        return dp[T] == Integer.MAX_VALUE - 1 ? -1 : dp[T];
    }
}

// 贪心
/**
 *  
 *  1、首先来初始化一个 maxEnd数组，用于保存 以当前数字(下标)为起点 的区间的 最大的结束位置
    2、遍历clips，初始化maxEnd数组(每个元素开头的区间的最大结束位置)
    3、定义三个变量，辅助完成之后的操作：

    1、pre 记录 结果中上一次的最大结束位置(本轮的最小开始位置)
    2、last 记录 当前遍历到的 区间最大结束位置
    3、count 记录 结果

    4、根据maxEnd数组，计算最终结果
    因为maxEnd[i]数组为最大结束位置，因此：
        当前元素 == 本区间最大元素，
        即：区间断开，无法连续到后续位置，返回-1
        当前元素 == 上一个区间的最大结束元素，
        即：到达了上一个满足条件的区间的结束位置
        这时的last为当前最大的结束位置，我们将其放入满足条件的区间集合之中
        (因为本题只需要我们记录 满足条件的区间个数，因为只需要 更新count和pre 即可)
 */
class Solution {
    public int videoStitching(int[][] clips, int T) {
        int[] maxn = new int[T];
        int last = 0, ret = 0, pre = 0;
        for (int[] clip : clips) {
            if (clip[0] < T) {
                maxn[clip[0]] = Math.max(maxn[clip[0]], clip[1]);
            }
        }
        for (int i = 0; i < T; i++) {
            last = Math.max(last, maxn[i]);
            if (i >= last) {
                return -1;
            }
            if (i == pre) {
                ret++;
                pre = last;
            }
        }
        return ret;
    }
}