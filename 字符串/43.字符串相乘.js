/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (Number(num1) === 0 || Number(num2) === 0) {
        return "0";
    }
    // 让num2的长度总比num1小
    num1.length < num2.length ? [num1, num2] = [num2, num1] : '';
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    let perMultiply = new Array();
    let c = 0,
        time = 0;
    for (let a of num2) {
        c = 0;
        let temp = new Array();
        for (let b of num1) {
            let t = Number(a) * Number(b) + c;
            temp.unshift(t % 10);
            c = Math.floor(t / 10);
        }
        c !== 0 ? temp.unshift(c) : '';
        for (let i = 0; i < time; ++i) {
            temp.push(0);
        }
        perMultiply.push(temp);
        ++time;
    }
    let str1 = perMultiply[0];
    for (let i = 1; i < perMultiply.length; ++i) {
        let str2 = perMultiply[i];
        console.log(str1, str2);
        let j = str1.length - 1,
            k = str2.length - 1,
            c = 0;
        while (j >= 0) {
            let t = str1[j] + str2[k] + c;
            str1[j] = t % 10;
            c = Math.floor(t / 10);
            --j;
            --k;
        }
        while (k >= 0) {
            let t = str2[k] + c;
            str1.unshift(t % 10);
            c = Math.floor(t / 10);
            --k;
        }
        c !== 0 ? str1.unshift(c) : '';
    }
    return str1.join('');
};