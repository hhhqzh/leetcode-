class Solution {
    public String convertToBase7(int num) {
        if(num == 0)
            return "0";
        int temp = Math.abs(num);
        StringBuilder res = new StringBuilder();
        while(temp != 0){
            res.append(temp % 7);
            temp /= 7;
        }
        if(num < 0)
            res.append('-');
        return res.reverse().toString();
    }
}