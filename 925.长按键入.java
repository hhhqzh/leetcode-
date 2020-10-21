// 长按并不包含错按的结果，注意注意！
class Solution {
    public boolean isLongPressedName(String name, String typed) {
        int len1 = name.length(), len2 = typed.length();
        if(len1 > len2)
            return false;
        int i = 0, j = 0;
        while(i < len1 && j < len2){
            if(name.charAt(i) == typed.charAt(j)){
                ++i;
                ++j;
            }
            else if(j > 0 && typed.charAt(j - 1) == typed.charAt(j))
                ++j;
            else
                return false;
        }
        while(j < len2){
            if(typed.charAt(j - 1) != typed.charAt(j))
                return false;
            ++j;
        }
        return i == len1;
    }
}