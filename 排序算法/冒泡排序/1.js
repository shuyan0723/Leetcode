function bubblesort(array){
    const {length}  = array;
    for(let i=0;i<length;i++){
        for(j=0;j<length-1-i;j++){
            if(array[j]>array[j+1]){
                // 交换位置的方法
                swap(array,j,j+1)
            }
        }
    }
    console.log(array);
    
}

function swap(array,a,b){
    // const temp=array[a];
    // array[a]=array[b];
    // array[b]=temp;
     [array[a],array[b]]=[array[b],array[a]] //但性能不如上面
}

bubblesort([4,2,5,3,1])