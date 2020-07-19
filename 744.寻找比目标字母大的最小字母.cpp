class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int i = 0, j = letters.size() - 1;
        while(i <= j){
            int mid = i + (j - i) / 2;
            if(letters[mid] <= target)
                i = mid + 1;
            else
                j = mid - 1;
        }
        return i < letters.size() ? letters[i] : letters[0];
    }
};