// 嵌套了循环，时间复杂度太高。。。。
class Solution {
    public String predictPartyVictory(String senate) {
        int r = 0;
        int d = 0;
        int n = senate.length();
        for(int i = 0; i < n; ++i){
            if(senate.charAt(i) == 'R')
                ++r;
            else
                ++d;
        }
        int i = 0;
        StringBuilder strBuilder = new StringBuilder(senate);
        while(r > 0 && d > 0){
            if(strBuilder.charAt(i) == 'R'){
                --d;
                if(d == 0)  break;
                for(int j = (i + 1) % n; j != i; j = (j + 1) % n){
                    if(strBuilder.charAt(j) == 'D'){
                        strBuilder.setCharAt(j, 'O');
                        break;
                    }
                }
            } else if (strBuilder.charAt(i) == 'D'){
                --r;
                if(r == 0)  break;
                for(int j = (i + 1) % n; j != i; j = (j + 1) % n){
                    if(strBuilder.charAt(j) == 'R'){
                        strBuilder.setCharAt(j, 'O');
                        break;
                    }
                }
            }
            i = (i + 1) % n;
        }
        return r > 0 ? "Radiant" : "Dire";
    }
}

// 使用队列！！！
class Solution {
    public String predictPartyVictory(String senate) {
        Queue<Integer> r = new LinkedList<Integer>();
        Queue<Integer> d = new LinkedList<Integer>();
        int n = senate.length();
        for(int i = 0; i < n; ++i){
            if(senate.charAt(i) == 'R')
                r.offer(i);
            else
                d.offer(i);
        }
        while(!r.isEmpty() && !d.isEmpty()){
            int i = r.poll();
            int j = d.poll();
            // 把元素插到队列尾部
            if(i < j)
                r.offer(i + n);
            else
                d.offer(j + n);
        }
        return r.isEmpty() ? "Dire" : "Radiant";
    }
}