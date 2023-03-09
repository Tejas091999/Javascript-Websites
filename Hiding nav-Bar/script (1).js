const button = document.getElementById("btn")
const button1 = document.getElementById("btn1")
const home = document.getElementById("home")
const about = document.getElementById("about")
const contact = document.getElementById("contact")
button.addEventListener("click",make)
button1.addEventListener("click",make1)
function make(){
  home.style.display="none"
  about.style.display="none"
  contact.style.display="none"
}
function make1(){
  home.style.display=onpageshow
  about.style.display=onpageshow
  contact.style.display=onpageshow
}
