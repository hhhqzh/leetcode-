/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function (num) {

    const buildNumber = (num) => {
        let a = num % 10;
        num = Math.floor(num / 10);
        let b = num % 10;
        num = Math.floor(num / 10);
        let c = num;
        let ans = "";
        if (c != 0) {
            ans = low[c] + " " + "Hundred ";
        }
        if (b == 1) {
            ans = ans + mid[a];
        } else if (b == 0) {
            ans = ans + low[a];
        } else {
            ans = ans + high[b] + " " + low[a];
        }
        return ans.trim() + " ";
    }

    let low = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    let mid = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    let high = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    if (num === 0)
        return 'Zero';
    let part1 = num % 1000;
    num = Math.floor(num / 1000);
    let part2 = num % 1000;
    num = Math.floor(num / 1000);
    let part3 = num % 1000;
    num = Math.floor(num / 1000);
    let part4 = num;

    let ans = "";

    if (part4 !== 0) {
        ans = buildNumber(part4) + "Billion ";
    }
    if (part3 !== 0) {
        ans = ans + buildNumber(part3) + "Million ";
    }
    if (part2 !== 0) {
        ans = ans + buildNumber(part2) + "Thousand ";
    }
    if (part1 !== 0) {
        ans = ans + buildNumber(part1);
    }
    return ans.trim();
};
