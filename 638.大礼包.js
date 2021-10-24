/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
    let flag = new Array(special.length).fill(true);
    for (let i = 0; i < special.length; ++i) {
        for (let j = 0; j < special[i].length - 1; ++j) {
            if (special[i][j] > needs[j]) {
                flag[i] = false;
                break;
            }
        }
    }
    let minPrice = Number.MAX_SAFE_INTEGER;
    let p = 0;
    let newPrice = new Array(price.length).fill(0);
    const dfs = (price, special, needs, newPrice) => {
        for (let i = 0; i < special.length; ++i) {
            let f = true;
            if (!flag[i])
                continue;
            let temp = [].concat(newPrice);
            for (let j = 0; j < special[i].length - 1; ++j) {
                if (temp[j] + special[i][j] > needs[j]) {
                    f = false;
                    break;
                }
                temp[j] += special[i][j];
            }
            if (f) {
                p += special[i][special[i].length - 1];
                dfs(price, special, needs, temp);
                p -= special[i][special[i].length - 1];
            }
        }
        for (let i = 0; i < needs.length; ++i) {
            p += (needs[i] - newPrice[i]) * price[i];
        }
        minPrice = Math.min(minPrice, p);
        for (let i = 0; i < needs.length; ++i) {
            p -= (needs[i] - newPrice[i]) * price[i];
        }
    }

    dfs(price, special, needs, newPrice);
    return minPrice;
};