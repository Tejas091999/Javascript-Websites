const weight1 = document.getElementById("weight")
const height1 = document.getElementById("height")
const button1 = document.getElementById("btn")
const para1 = document.getElementById("result")
button1.addEventListener("click",final)
function final(){
  var final1= weight1.value/height1.value
  para1.innerHTML = final1 
}