const button=document.getElementById("btn")
const input=document.getElementById("input")
button.addEventListener("click",make)
function make(){
  input.classList.remove("active")
  input.classList.add("inactive")
  button.classList.add("activeimg")
  button.classList.remove("inactiveimg")
}