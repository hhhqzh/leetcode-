/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    version1 = version1.split(".")
    version2 = version2.split(".")

    version1 = version1.map((val) => {return parseInt(val)});
    version2 = version2.map((val) => {return parseInt(val)});

    let n1 = version1.length, n2 = version2.length;
    for (let n = 0; n < Math.max(n1, n2); ++n) {
        let i = n < n1 ? version1[n] : 0;
        let j = n < n2 ? version2[n] : 0;
        if (i > j)
            return 1;
        else if (i < j)
            return -1;
    }
    return 0;
};