const button1 = document.getElementById("need")
const item = document.getElementById("item")
const list = document.getElementById("list")
button1.addEventListener("click",need2)
function need2(){
  li1 = document.createElement("li")
  check = document.createElement("input")
  li1.textContent = item.value
  check.type = "checkbox"
  list.appendChild(li1)
  list.appendChild(check)
}
