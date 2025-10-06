function selectionSort(arr){
   const {length} =arr

   let indexMin
   for(let i=0;i<length-1;i++){
    indexMin=i;
   
   for(let j=i;j<length;j++){
     if(arr[indexMin]>arr[j]){
        indexMin=j;
     }
   }
   if(i!==indexMin){
      swap(arr,i,indexMin)
   }
 }
 console.log(arr);
 
}


function swap(arr,a,b){
    [arr[a],arr[b]]=[arr[b],arr[a]];
}

selectionSort([1,4,3,2,5])