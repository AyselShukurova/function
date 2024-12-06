
const inputBox = document.getElementById('inputBox')
const button = document.getElementById('button')
const list = document.getElementById('ul')
button.textContent = 'Add'



button.addEventListener("click", () => {
   if(inputBox.value !== ""){
      const taskText = inputBox.value
      const listItem = document.createElement('li');
      listItem.innerHTML = `${taskText} <div> <button class = "delete-btn">Delete</button> <button class = "edit-btn">Edit</button></div>`;
      list.appendChild(listItem); 
      inputBox.value = "" 
   }
})

list.addEventListener('click', (event) =>{
   if(event.target.classList.contains("delete-btn")){
      const listItem = event.target.parentElement.parentElement;
      // const taskText = inputBox.value
      list.removeChild(listItem);
  

   }
   
})

