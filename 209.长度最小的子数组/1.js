/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动循环，用一个for循环做两个for循坏的事
  let j = sum = 0, a = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      a = Math.min(a, i - j + 1);
      sum = sum - nums[j];
      j++;
    }

  }
  return a === Infinity ? 0 : a
};