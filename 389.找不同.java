class Solution {
    public char findTheDifference(String s, String t) {
        int tCount = 0, sCount = 0;
        for(int i = 0; i < s.length(); ++i)
            sCount += s.charAt(i) - 'a';
        for(int i = 0; i < t.length(); ++i)
            tCount += t.charAt(i) - 'a';
        int temp = tCount - sCount;
        return (char)('a' + temp);
    }
}