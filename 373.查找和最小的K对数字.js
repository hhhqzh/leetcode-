/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// 多路归并
var kSmallestPairs = function (nums1, nums2, k) {
    if (k > nums1.length * nums2.length) {
        k = nums1.length * nums2.length
    }
    if (nums1.length == 0 || nums2.length == 0) {
        return [];
    }
    let steps = new Array(nums1.length);
    for (let i = 0; i < steps.length; ++i) {
        steps[i] = 0;
    }
    let res = [];
    for (let i = 0; i < k; ++i) {
        let min = Number.MAX_SAFE_INTEGER;
        let minStepIndex = 0;
        for (let j = 0; j < nums1.length; ++j) {
            if (steps[j] < nums2.length && nums2[steps[j]] + nums1[j] < min) {
                min = nums2[steps[j]] + nums1[j];
                minStepIndex = j;
            }
        }
        res.push([nums1[minStepIndex], nums2[steps[minStepIndex]]]);
        ++steps[minStepIndex];
    }
    return res;
};