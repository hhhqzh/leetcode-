// 假如A的频率count最高为3，间隔n为2，所以A必须间隔两个任务之后再次执行，才能满足题目的最短时间
// 如果A之间的间隔大于2，那必然不可能是最短时间
// 执行顺序：A X X A X X A，这里的X是用来填充其他任务的或者是空隙。
// 所以有(count - 1)个A，每个A配上n个X，最后再加上一个A，所以总时间就为(count - 1) * (n + 1) + 1
// 特殊情况：如果有多个任务的频率和A一样，比如B，你那么最后还会多一个B。A B X A B X A *B*
//          因此上面计算出来的结果还需加上频率最大的不同任务的个数
//   公式算出的值可能会比数组的长度小，如["A","A","B","B"]，n = 0，此时要取数组的长度
class Solution {
    public int leastInterval(char[] tasks, int n) {
        if(n == 0  || tasks.length <= 1)
            return tasks.length;
        int[] counts = new int[26];
        for(int i = 0; i < tasks.length; ++i){
            ++counts[tasks[i] - 'A'];
        }
        Arrays.sort(counts);
        int max = counts[25];
        int res = (max - 1) * (n + 1) + 1;
        for(int i = 24; i >=0; --i){
            if(counts[i] == counts[25])
                ++res;
        }
        return Math.max(res, tasks.length);
    }
}