/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    let arr1 = num1.split('+'),
        arr2 = num2.split('+');
    arr1[1] = arr1[1].slice(0, arr1[1].length - 1);
    arr2[1] = arr2[1].slice(0, arr2[1].length - 1);
    let real = 0,
        virtual = 0;
    // 实部相乘
    real = Number(arr1[0]) * Number(arr2[0]);
    // 虚部相乘
    real = real + (-1) * Number(arr1[1]) * Number(arr2[1]);
    // 虚实相乘
    virtual += Number(arr1[0]) * Number(arr2[1]);
    virtual += Number(arr1[1]) * Number(arr2[0]);
    let res = real + "+" + virtual + "i";
    return res;
};