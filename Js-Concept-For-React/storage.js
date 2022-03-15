//call button
const addToLocalStorage = () =>{
    //call id and value
    const idInput = document.getElementById("storage-id");
    const id = idInput.value;
    const valueInput = document.getElementById("storage-value");
    const value = valueInput.value;

// set id and value in local storage
if(id && value){
    localStorage.setItem(id, value);
}
idInput.value = "";
valueInput.value = "";
}