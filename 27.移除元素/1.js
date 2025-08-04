/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let a = 0
  for (let b = 0; b < nums.length; b++) {
    if (nums[b] !== val) {
      nums[a] = nums[b];
      a++;
    }
  }
  return a
}