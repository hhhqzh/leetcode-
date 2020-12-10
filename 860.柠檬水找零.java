class Solution {
    public boolean lemonadeChange(int[] bills) {
        if(bills.length == 0)
            return true;
        int[] count = new int[2];
        for(int i = 0; i < bills.length; ++i){
            switch(bills[i]){
                case 5:{
                    ++count[0];
                    break;
                }
                case 10:{
                    if(count[0] > 0){
                        --count[0];
                        ++count[1];
                    } else 
                        return false;
                    break;
                }
                case 20:{
                    if(count[0] > 0 && count[1] > 0){
                        --count[0];
                        --count[1];
                    } else if(count[0] >= 3)
                        count[0] -= 3;
                    else
                        return false;
                    break;
                }
            }
        }
        return true;
    }
}