const sortArray = (arr)=>{
  for (let i = 0; i < arr.length;i++){
    for(let j = 0; j< arr.length -1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  const sortedArr = arr;
  let oddArr = arr.filter(number => number % 2 !== 0)
  let evenArr = arr.filter(number => number % 2 === 0)
  console.log('Array : ', sortedArr.join(', '));
  console.log('Ganjil : ', oddArr.join(', '));
  console.log('Genap : ', evenArr.join(', '));
}

sortArray([2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11]);