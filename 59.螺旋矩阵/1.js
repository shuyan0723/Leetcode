// 循环不变量
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let startX=startY=0;  // 起始位置
    let loop=Math.floor(n/2); // 选择圈数
    let mid=Math.floor(n/2);  // 中间位置
    let offset=1;  // 控制每一层填充元素个数
    let count=1; // 更新填充数字
    let res=new Array(n).fill(0).map(()=>new Array(n).fill(0));
    while(loop--){
        let row=startX,col=startY;
        // 上行从左到右（左闭右开）
        for(;col<n-offset;col++){
            res[row][col]=count++;
        }
        // 右列从上到下 都是左闭右开
        for(;row<n-offset;row++){
            res[row][col]=count++;
        }
        // 下行从右到左（左闭右开）
        for(;col>startY;col--){
            res[row][col]=count++
        }
        // 左列从下到上
        for(;row>startX;row--){
            res[row][col]=count;
            count++;
        }
        // 更新起始位置
        startX++;
        startY++;

        // 更新offset
        offset+=1;
    }
  if(n%2===1){
    res[mid][mid]=count;
  }
  return res
};