/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    people.sort((a, b) => {return a - b});
    let res = 0;
    let l = 0, r = people.length - 1;
    while (l <= r) {
        ++res;
        if (l != r) {
            if (people[l] + people[r] > limit)
                --r;
            else if (people[l] + people[r] <= limit) {
                ++l;
                --r;
            }
        } else
            ++l;
    }
    return res;
};