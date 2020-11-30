class Solution {
    public String reorganizeString(String S) {
        if(S.length() < 2)
            return S;
        int[] counts = new int[26];
        int maxCounts = 0;
        int length = S.length();
        for(int i = 0; i < length; ++i){
            char c = S.charAt(i);
            ++counts[c - 'a'];
            maxCounts = Math.max(counts[c - 'a'], maxCounts);
        }
        // 出现最多的次数如果大于(n + 1)/2 则不可能
        if(maxCounts > (length + 1) / 2)
            return "";
        PriorityQueue<Character> queue = new PriorityQueue<Character>(new Comparator<Character>() {
            public int compare(Character letter1, Character letter2) {
                return counts[letter2 - 'a'] - counts[letter1 - 'a'];
            }
        });
        for(char c = 'a'; c <= 'z'; ++c){
            if(counts[c - 'a'] > 0)
                queue.offer(c);
        }
        StringBuffer sb = new StringBuffer();
        while(queue.size() > 1) {
            char letter1 = queue.poll();
            char letter2 = queue.poll();
            sb.append(letter1);
            sb.append(letter2);
            int i = letter1 - 'a', j = letter2 - 'a';
            --counts[i];
            --counts[j];
            if(counts[i] > 0)
                queue.offer(letter1);
            if(counts[j] > 0)
                queue.offer(letter2);
        }
        if(queue.size() == 1)
            sb.append(queue.poll());
        return sb.toString();
    }
}