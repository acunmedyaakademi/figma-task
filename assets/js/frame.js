document.getElementById('mode-bttn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classList);
});

if(localStorage.getItem('mode') != ''){
    document.body.classList.add(localStorage.getItem('mode'));
    document.getElementById('mode-bttn').checked = true;
}

// Dialog Window Buttons Functions

const dialog = document.getElementById("dialog");
const newBttn = document.querySelector(".plus-button");
const newTaskButton = document.querySelector(".task-button");
const newDashedButton = document.querySelector(".bttn-dashed");

const closeBttn = document.getElementById("close-btn");

function openDialog(){
    dialog.style.display = "block";
}
function closeDialog(){
    dialog.style.display = "none";
}

// Dialog opened functions
newBttn.addEventListener("click", openDialog);
newTaskButton.addEventListener("click", openDialog);
newDashedButton.addEventListener("click", openDialog);

closeBttn.addEventListener("click", closeDialog);

const optionsBtn = document.querySelector(".dialog-menu-btn");
const optionsDialog = document.getElementById("dialogOptions");
const selectOption = document.getElementById("selectOptions");
const confirmBtn = document.getElementById("confirmOptBtn");
const selectedOption = document.getElementById("selectedOption");

optionsBtn.addEventListener('click',() => {
    optionsDialog.showModal();
});

confirmBtn.addEventListener('click',() => {
    const selectedOption = selectOption.value;
    selectedOption.textContent = `Chose : ${selectedOption}`;
    optionsDialog.close();
});

const noneInput = document.getElementById('noneInput');
const saveButton = document.getElementById('saveBtn');
const note = document.getElementById('notes');

saveButton.addEventListener('click', () => {
    const not = noneInput.value;
    if (not.trim () !== ''){
        note.innerHTML += `<p>${not}</p>`;
        dialog.close();
        noneInput.value = '';
    }
});