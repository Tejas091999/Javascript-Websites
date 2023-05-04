const addButton = document.getElementById("addButton")
const inputField = document.getElementById("inputField")
const listContainer = 
  document.getElementById("listContainer")
addButton.addEventListener("click",function(){
  const newItem = document.createElement("li");
  const ItemText = document.createTextNode(inputField.value)
  newItem.appendChild(ItemText);
  listContainer.appendChild(newItem);
  inputField.value="";
})