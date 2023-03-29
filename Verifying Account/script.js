const button1 = document.getElementById("btn")
const  first = parseInt(document.getElementById("first"))
const second = parseInt(document.getElementById("second"))
const third = parseInt(document.getElementById("third"))
const fourth = parseInt(document.getElementById("fourth"))
let pin = [1,2,3,4]
let user =[first,second,third,fourth]
 button1.addEventListener("click",verify)
function verify(){
  if( pin === user){
    console.log("hello World")
  }
}