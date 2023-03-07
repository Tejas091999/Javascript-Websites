//Names
const firstN = document.getElementById("firstN")
const secondN = document.getElementById("secondN")
const thirdN = document.getElementById("thirdN")
const fourthN = document.getElementById("fourthN")
const fifthN = document.getElementById("fifthN")
const sixthN = document.getElementById("sixthN")
//Amount
const firstA = document.getElementById("firstA")
const secondA = document.getElementById("secondA")
const thirdA = document.getElementById("thirdA")
const fourthA = document.getElementById("fourthA")
const fifthA = document.getElementById("fifthA")
const sixthA = document.getElementById("sixthA")
//Display
const total = document.getElementById("total")
const button = document.getElementById("btn")
//Functionality
button.addEventListener("click",make)
button.addEventListener("click",pay)
function make(){
  total.innerText = "$"+(parseInt(firstA.value) + parseInt(secondA.value) +parseInt(thirdA.value) + parseInt(fourthA.value) + parseInt(fifthA.value) + parseInt(sixthA.value))
}
function pay(){
  var newUl = document.createElement("ul")
  var newLi1 = document.createElement("li")
  newLi1.innerHTML=firstN.value
  newUl.appendChild(newLi1)
  document.body.append(newUl)
  
  var newLi2 = document.createElement("li")
  newLi2.innerHTML=secondN.value
  newUl.appendChild(newLi2)
  document.body.append(newUl)
  
  var newLi3 = document.createElement("li")
  newLi3.innerHTML=thirdN.value
  newUl.appendChild(newLi3)
  document.body.append(newUl)
  
  var newLi4 = document.createElement("li")
  newLi4.innerHTML=fourthN.value
  newUl.appendChild(newLi4)
  document.body.append(newUl)
  
  var newLi5 = document.createElement("li")
  newLi5.innerHTML=fifthN.value
  newUl.appendChild(newLi5)
  document.body.append(newUl)
  
  var newLi6 = document.createElement("li")
  newLi6.innerHTML=fourthN.value
  newUl.appendChild(newLi6)
  document.body.append(newUl)
}
