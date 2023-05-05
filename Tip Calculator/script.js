const button1 = document.getElementById("btn");
const billAmount = document.getElementById("bill")
const service1 = document.getElementById("service")
const people1 = document.getElementById("people")
const para1 = document.getElementById("para")
button1.addEventListener("click",payment)
 function payment(){
   var totalTip = (billAmount.value *       service1.value)/people1.value
  para1.innerHTML = "$" + totalTip + " each"
 }
