/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

// 沙雕方法...
var getHint = function (secret, guess) {
    let A = 0,
        B = 0;
    let map = new Map();
    for (let i = 0; i < secret.length; ++i) {
        if (map.has(secret.charAt(i)))
            map.set(secret.charAt(i), map.get(secret.charAt(i)) + 1);
        else
            map.set(secret.charAt(i), 1);
    }
    for (let i = 0; i < secret.length; ++i) {
        if (secret.charAt(i) === guess.charAt(i)) {
            ++A;
            if (map.get(guess.charAt(i)) - 1 === 0)
                map.delete(guess.charAt(i));
            else
                map.set(guess.charAt(i), map.get(guess.charAt(i)) - 1);
        }
    }
    for (let i = 0; i < secret.length; ++i) {
        if (secret.charAt(i) !== guess.charAt(i)) {
            if (map.has(guess.charAt(i)) && map.get(guess.charAt(i)) > 0) {
                ++B;
                map.set(guess.charAt(i), map.get(guess.charAt(i)) - 1);
            } else if (map.has(guess.charAt(i)) && map.get(guess.charAt(i)) === 0) {
                map.delete(guess.charAt(i));
            }
        }
    }
    return A + 'A' + B + 'B';
};

var getHint = function(secret, guess) {
    let A = 0;
    const cntS = new Array(10).fill(0);
    const cntG = new Array(10).fill(0);
    for (let i = 0; i < secret.length; ++i) {
        if (secret[i] == guess[i]) {
            ++A;
        } else {
            ++cntS[secret.charAt(i) - '0'];
            ++cntG[guess.charAt(i) - '0'];
        }
    }
    let B = 0;
    for (let i = 0; i < 10; ++i) {
        B += Math.min(cntS[i], cntG[i]);
    }
    return A + "A" + B + "B";
};

// 一次循环
var getHint = function (secret, guess) {
    let A = 0,
        B = 0;
    let nums = new Array(100).fill(0);
    for (let i = 0; i < secret.length; ++i) {
        if (secret.charAt(i) === guess.charAt(i)) {
            ++A;
        } else {
            if (nums[guess.charAt(i) - '0'] > 0)
                ++B;
            --nums[guess.charAt(i) - '0'];
            if (nums[secret.charAt(i) - '0'] < 0)
                ++B;
            ++nums[secret.charAt(i) - '0'];
        }
    }
    return A + 'A' + B + 'B';
};