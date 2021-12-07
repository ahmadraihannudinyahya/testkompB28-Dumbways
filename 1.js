const seriesPrime = length =>{
  let result = [];
  for(let i = 2; result.length < length; i++){
    let status = true;
    for(let j = 2; j < i; j++){
      if(i % j === 0){
        status = false;
        break;      
      }
    }
    if(status){
      result.push(i);
    }
  }
  return result;
}

const drawSikuSiku = (number) => {
  // rumus deret aritmatika Sn = n/2 (2a+(n-1)b)
  const PrimeLength = number/2 *(2*1+(number -1)*1);

  const primeArr = seriesPrime(PrimeLength);

  let primeIndex = 0
  for(let i = 0;i<number;i++){
    const result = [];
    for(let j = 0; j<= i;j++){
      result.push(primeArr[primeIndex]);
      primeIndex++
    }
    console.log(result.join(' '));
  }
}

drawSikuSiku(7)

