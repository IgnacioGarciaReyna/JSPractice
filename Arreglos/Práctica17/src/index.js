

let index = 0;
function main () {
   let numberList = [14, 4, 10, 9, 1, 2];
   let listSort = quickSort(numberList);
   console.log("🚀 ~ file: index.js ~ line 7 ~ main ~ listSort", listSort)
}

function quickSort (arr) {

   if (arr.length == 0) {
      return[];
   }
   //pivote
   let mediumIndex = Math.floor(arr.length / 2);
   let pivote = arr[mediumIndex];


   let leftArr = [];
   let rightArr = [];

   //recorro el arreglo para validar numeros menores y numeros mayores al pivote 

   //cuando el for evalue la posicion en el cual se encuentra el pivote no tengo que hacer nada

   for (let i = 0; i < arr.length; i++) {
      if ( i != mediumIndex) {
         if(arr[i] < pivote) {
            leftArr.push(arr[i]);
         } else {
            rightArr.push(arr[i]);
         }
      }
   }

   leftArr = quickSort(leftArr);
   rightArr = quickSort(rightArr);

   console.log("🚀 ~ file: index.js ~ line 21 ~ quickSort ~ leftArr", leftArr)
   console.log("🚀 ~ file: index.js ~ line 23 ~ quickSort ~ rightArr", rightArr)

   return leftArr.concat(pivote).concat(rightArr);
}

main();