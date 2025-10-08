function insertSort(arr){
  const {length}=arr;
  let temp; // 存当前这一轮对应索引的值
  for(let i=1;i<length;i++){
    temp=arr[i];
    let j=i;
    while(j>0&& arr[j-1]>temp){
        arr[j]=arr[j-1];
        j--
    }
    arr[j]=temp;
  }
  console.log(arr);
  
}

insertSort([1,4,3,2,5])