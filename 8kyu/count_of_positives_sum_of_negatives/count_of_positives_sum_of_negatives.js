function countPositivesSumNegatives(input) {
  let negativeSum =0;
  let count =0;
  if(input === null)
    return [];
  if(input.length===0)
      return [];
  for(let a =0; a<input.length; a++){
    if(input[a]> 0)
      count++;
    else if(input[a]<0)
      negativeSum+= input[a];
  };
  return [count,negativeSum];
  }