// 如果栈顶字符大于当前字符 s[i]s[i]s[i]，说明栈顶字符为「关键字符」，故应当被去除。去除后，新的栈顶字符就与 s[i]s[i]s[i] 相邻了，我们继续比较新的栈顶字符与 s[i]s[i]s[i] 的大小。
// 重复上述操作，直到栈为空或者栈顶字符不大于 s[i]s[i]s[i]。
class Solution {
    public String removeDuplicateLetters(String s) {
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < s.length(); ++i){
            char c = s.charAt(i);
            if(stack.contains(c))
                continue;
            while(!stack.isEmpty() && stack.peek() > c && s.indexOf(stack.peek(), i) != -1)
                stack.pop();
            stack.push(c);
        }
        StringBuilder str = new StringBuilder();
        for(int i = 0; i < stack.size(); ++i)
            str.append(stack.get(i));
        return str.toString();
    }
}

class Solution {
    public String removeDuplicateLetters(String s) {
        Stack<Character> stack = new Stack<>();
        int[] count = new int[26];
        int[] visited = new int[26];
        for(int i = 0; i < s.length(); ++i)
            ++count[s.charAt(i) - 'a'];
        for(int i = 0; i < s.length(); ++i){
            char c = s.charAt(i);
            --count[c - 'a'];
            if(visited[c - 'a'] == 1)
                continue;
            while(!stack.isEmpty() && stack.peek() > c && count[stack.peek()- 'a'] > 0){
                visited[stack.peek() - 'a'] = 0;
                stack.pop();
            }
            stack.push(c);
            visited[c - 'a'] = 1;
        }
        StringBuilder str = new StringBuilder();
        for(int i = 0; i < stack.size(); ++i)
            str.append(stack.get(i));
        return str.toString();
    }
}