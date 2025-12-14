// 冒泡排序比较所有相邻的两个项，如果第一个比第二个大，就交换它们，元素向上移动至正确的顺序
// 就好像气泡升至表面一样，冒泡排序因此得名
// 代码展示出来，对着动画理解，再重新敲一遍
function bubblesort(array){
  const {length} = array;
  for(let i=0; i<length;i++){
    for(let j=0;j<length-1-i;j++){ 
      // 每一次将最大的数沉底，可以少比一次
        if(array[j]>array[j+1]){
         swap(array,j,j+1)
        //  [array[a],array[b]]=[array[b],array[a]]
        }
    }
  }
    // return array;
    console.log(array);
}

function swap(array,a,b){
  [array[a],array[b]]=[array[b],array[a]]
}
bubblesort([2,45,32,6,3])