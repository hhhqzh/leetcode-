class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        int count = 0;
        Map<String, Integer> map = new HashMap<>();
        for(List<String> list:equations){
            for(String s:list){
                if(!map.containsKey(s))
                    map.put(s, count++);
            }
        }

        double[][] graph = new double[count][count];

        for(String s: map.keySet()){
            int x = map.get(s);
            graph[x][x] = 1.0;
        }

        int index = 0;
        for(List<String> list: equations){
            String a = list.get(0);
            String b = list.get(1);
            int aa = map.get(a);
            int bb = map.get(b);
            double value = values[index++];
            graph[aa][bb] = value;
            graph[bb][aa] = 1 / value;
        }

        for(int i = 0; i < count; ++i){
            for(int j = 0; j < count; ++j){
                for(int k = 0; k < count; ++k){
                    if(j == k || graph[j][k] != 0)
                        continue;
                    if(graph[j][i] != 0 && graph[i][k] != 0)
                        graph[j][k] = graph[j][i] * graph[i][k];
                }
            }
        }

        double[] res = new double[queries.size()];
        for(int i = 0; i < res.length; ++i){
            List<String> q = queries.get(i);
            String a = q.get(0);
            String b = q.get(1);
            if(map.containsKey(a) && map.containsKey(b)){
                double ans = graph[map.get(a)][map.get(b)];
                res[i] = (ans == 0 ? -1.0 : ans);
            } else {
                res[i] = -1.0;
            }
        }
        return res;
    }
}