function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      console.log("A : " + a.match(/\d/) + "  B : " + b.match(/\d/));
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}


// Second solution 

// function order(words){
//   let newArr=[]
//   let newW= words.split(" ")
//   if( words.length === 0 ) return ""
//   for(let i=1; i<=newW.length; i++){
//     for(let j=0; j<newW.length; j++){
//       if(newW[j].includes(`${i}`))
//           newArr.push(newW[j])
      
//   }
//   }

//   return newArr.join(" ")
// }