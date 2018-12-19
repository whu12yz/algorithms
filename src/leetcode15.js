/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b);
    const result = [];
    const resultStr = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let m = i + 1;
        let n = nums.length - 1;
        while(nums[i] <= 0 && n > m) {
            if (nums[i] + nums[m] + nums[n] === 0) {
                if (resultStr.indexOf([nums[i], nums[m], nums[n]].toString()) === -1){
                    result.push([nums[i], nums[m], nums[n]]);
                    resultStr.push([nums[i], nums[m], nums[n]].toString())
                }
                m++;
                n--;
            } else if (nums[m] + nums[n] > -nums[i]) {
                n--;
            } else {
                m++;
            }
        }
    }
    return result;
};

const a = threeSum([-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]);