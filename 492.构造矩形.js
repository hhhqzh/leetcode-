/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let W;
    W = Math.floor(Math.sqrt(area));
    while (area % W !== 0) {
        --W;
    }
    return [area / W, W];
};