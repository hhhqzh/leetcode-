// 回溯

class Solution {
    public List<Integer> splitIntoFibonacci(String S) {
        List<Integer> list = new ArrayList<Integer>();
        dfs(list, S, 0, 0, 0);
        return list;
    }

    public boolean dfs(List<Integer> list, String S, int index, int pre, int sum){
        if(index == S.length())
            return list.size() >= 3;
        long currLong = 0;
        for(int i = index; i < S.length(); ++i){
            if(i > index && S.charAt(index) == '0')
                break;
            currLong = currLong * 10 + S.charAt(i) - '0';
            if(currLong > Integer.MAX_VALUE)
                break;
            int cur = (int)currLong;
            if(list.size() >= 2){
                if(cur < sum)
                    continue;
                else if(cur > sum)
                    return false;
            }
            // 前两个或者形成数列
            list.add(cur);
            if(dfs(list, S, i + 1, cur, cur + pre))
                return true;
            else
                list.remove(list.size() - 1);
        }
        return false;
    }
}