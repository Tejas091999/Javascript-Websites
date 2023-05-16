const button1 = document.getElementById("python")
const button2 = document.getElementById("javascript")
const button3 = document.getElementById("java")
const button4 = document.getElementById("c++")
const button5 = document.getElementById("c")
const button6 = document.getElementById("sql")
const formula = document.getElementById("div1")
button1.addEventListener("click", python1)
button2.addEventListener("click", javascript1)
button3.addEventListener("click", java1)
button4.addEventListener("click", c1)
button5.addEventListener("click", c2)
button6.addEventListener("click", sql1)
function python1(){
  para = document.createElement("p")
  para.textContent = "Python:    "  + ' print("Hello World")'
  formula.appendChild(para)
}
function javascript1(){
  para = document.createElement("p")
  para.textContent =  "Javascript:    " + ' console.log("Hello World")'
  formula.appendChild(para)
}
function java1(){
  para = document.createElement("p")
  para.textContent = "Java:    " + ' System.out.print("Hello World")'
  formula.appendChild(para)
}
function c1(){
  para = document.createElement("p")
  para.textContent = "C++:    " + ' cout << "Hello World"'
  formula.appendChild(para)
}
function c2(){
  para = document.createElement("p")
  para.textContent = "C:    " + ' printf("Hello World")'
  formula.appendChild(para)
}
function sql1(){
  para = document.createElement("p")
  para.textContent = "SQL:   " + ' PRINT"Hello World"'
  formula.appendChild(para)
}