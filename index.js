const inputBox = document.getElementById('task');
const taskList = document.getElementById('list_wrapper');
function addTask() {
    if (inputBox.value === "") {
        alert('Please enter a task');
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        taskList.appendChild(list);
        let spanner = document.createElement('span');
        spanner.innerHTML = '&#x2715';
        list.appendChild(spanner);
    }
    inputBox.value = '';
    saveData();
}
taskList.addEventListener("click", function (e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('done');
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

    });
    inputBox.addEventListener("keyup", function(pressEnter) {
        if (pressEnter.keyCode === 13) {
          pressEnter.preventDefault();
          addTask();
        }
    })
    function saveData(){
        localStorage.setItem('data' , taskList.innerHTML);
    }
    function revealData() {
        taskList.innerHTML = localStorage.getItem('data');
    }
    revealData();