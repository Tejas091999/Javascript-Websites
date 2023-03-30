const button1 = document.getElementById("btn")
const form1 = document.getElementById("form")
button1.addEventListener("click", show)
function show() {
  form1.classList.add("form1")
}