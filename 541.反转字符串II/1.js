/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr=s.split('');
    const n=arr.length;
    //以2k为步长遍历每个数组
    for(let i=0;i<n;i+=2*k){
        //以2k为步长遍历数组
        let left=i;
        let right=Math.min(i+k-1,n-1)
        while(left<right){
            [arr[left],arr[right]]=[arr[right],arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('')
}