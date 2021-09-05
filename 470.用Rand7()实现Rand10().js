/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    let res;
    do {
        let row = rand7(), col = rand7();
        res = (row - 1) * 7 + col;
    } while(res > 40);
    return 1 + (res - 1) % 10;
};