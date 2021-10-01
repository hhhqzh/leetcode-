/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    let cityA = [];
    for (let path of paths) {
        cityA.push(path[0]);
    }
    for (let path of paths) {
        if (cityA.indexOf(path[1]) === -1)
            return path[1];
    }
};