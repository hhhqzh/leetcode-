/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function (postorder) {

    const isPostorder = (postorder, l, r) => {
        if (l >= r)
            return true;
        let val = postorder[r];
        let i = l;
        while (i <= r - 1) {
            if (postorder[i] < val)
                ++i;
            else 
                break;
        }
        for (let j = i; j < r; ++j) {
            if (postorder[j] < val)
                return false;
        }
        return isPostorder(postorder, l, i - 1) && isPostorder(postorder, i, r - 1);
    }

    return isPostorder(postorder, 0, postorder.length - 1);
};