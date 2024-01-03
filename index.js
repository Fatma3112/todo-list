const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn")

function addTask() {
    if (inputBox.value === '') {
        document.querySelector(".note").style.display = "block";

    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        document.querySelector(".note").style.display = "none";
    }
    inputBox.value = '';
    saveData();
}

addBtn.addEventListener("click", () => {
    addTask();
})

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}


function showData() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();