const weight1 = document.getElementById("weight")
const height1 = document.getElementById("height")
const button1 = document.getElementById("btn")
const para1 = document.getElementById("result")
button1.addEventListener("click",final)
function final(){
  var final1= weight1.value/height1.value
  para1.innerHTML = final1 
  if (final1 < 18.4){
    para1.innerHTML = "Underweight"}
  else if (18.4 < final1< 24.9){
    para1.innerHTML = "Normal"}
  else if (24.9 < final1 < 40){
    para1.innerHTML = "OverWeight"}
  else {
    para1.innerHTML = "Obese"}
}
