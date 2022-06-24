function domainName(url) {
  //your code here
  console.log(url);
  let c = url.split("//")[1];
  if (c === undefined)
    if (url.split(".")[0] !== "www") return url.split(".")[0];
    else {
      let z = url.split(".")[1];
      return z.split(".")[0];
    }
  if (c.split(".")[0] !== "www") return c.split(".")[0];
  else {
    let b = c.split(".")[1];
    return b.split(".")[0];
  }
}


// Second solution

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

//  Third solution 

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }