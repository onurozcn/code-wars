function alphabetPosition(text) {
  
  const newText = text.toLowerCase().split("")
  let result=[]
    for(let i= 0; i<newText.length; i++){
        if(newText[i].match(/[a-z]/i))
      result.push(newText[i].charCodeAt(0)-96)
    }
    return result.join(" ")
  }