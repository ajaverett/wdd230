const chapterInput = document.querySelector("#favchap");
const addButton = document.querySelector("main button");
const chapterList = document.querySelector("#list");

function chapterManipulation() {
    
    if (chapterInput.value == ""){
        return;
    }

    let newListItem = document.createElement("li");
    let deleteButton = document.createElement("button");

    newListItem.textContent = chapterInput.value;
    deleteButton.textContent = '❌';
    newListItem.appendChild(deleteButton);
    chapterList.appendChild(newListItem);

    deleteButton.addEventListener('click', () => {
        newListItem.remove();
    });

    chapterInput.focus();
    chapterInput.value = ""; 
  }

addButton.addEventListener('click', chapterManipulation);

addButton.addEventListener('click', chapterManipulation);

chapterInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        chapterManipulation()
    }
});

