class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;
        for(int i = 0; i < n; ++i){
            if(gas[i] < cost[i])
                continue;
            else{
                int j = (i + 1) % n;
                int tank = gas[i];
                boolean flag = true;
                while(j != i){
                    tank = tank - cost[j - 1 == -1 ? n - 1 : j - 1] + gas[j];
                    if(tank < cost[j]){
                        flag = false;
                        break;
                    }
                    j = (j + 1) % n;
                }
                if(!flag)   continue;
                if(tank >= cost[j - 1 == -1 ? n - 1 : j - 1])
                    return i;
            }
        }
        return -1;
    }
}