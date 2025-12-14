// 选择排序算法是一种原址比较排序算法。大致思路是找到数据结构
// 中的最小值并将其放置在第一位，第二小放在第二位
// 记录最小值，然后排在最前面
function selectionSort(arr) {
   const { length } = arr;
   let indexMin;
   for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
         if (arr[indexMin] > arr[j]) {
            indexMin = j;
         }
      }
      if (i !== indexMin) {
         swap(arr, i, indexMin)
      }
   }
   console.log(arr);
}
function swap(arr, a, b) {
   [arr[a], arr[b]] = [arr[b], arr[a]]
}

selectionSort([1, 4, 3, 2, 5])