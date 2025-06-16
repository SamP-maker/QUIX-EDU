




let generateNumber = (min,max) =>{

  const getDiv = document.getElementById("lucky_number")
   let luckyNumber =  Math.floor(Math.random() * (max - min + 1)) + min
   getDiv.innerText = luckyNumber


}