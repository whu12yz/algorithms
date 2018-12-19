/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 function abs (num) {
     return Math.abs(num);
 }
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b);
    let minPlus = nums[0] + nums[1] + nums[2];
    let minNum = abs(nums[0] + nums[1] + nums[2] - target);
    for (let i = 0; i < nums.length - 2; i++) {
        let m = i + 1;
        let n = nums.length - 1;
        while (n > m) {
            let diff = nums[i] + nums[m] + nums[n] - target;
            if (diff === 0) {
                minNum = 0;
                minPlus = target;
                break;
            }
            if (abs(diff) < minNum) {
                minNum = abs(diff);
                minPlus = nums[i] + nums[m] + nums[n];
            }
            if(diff > 0) {
                n--;
            } else {
                m++;
            }
        }
    }
    return minPlus;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));

