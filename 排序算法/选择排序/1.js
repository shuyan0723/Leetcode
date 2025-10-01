function selecttionSort(arr){
    const {length} =arr;

    let indexMin
    for(let i=0;i<length-1;i++){
       indexMin=i;
       for(let j=i;j<length;j++){
        if(arr[j]<arr[indexMin]){
            indexMin=j;
        }
       }
       if(indexMin!==i){
        [arr[i],arr[indexMin]]=[arr[indexMin],arr[i]]
       }
    }
}

selecttionSort([5,4,3,2,1])