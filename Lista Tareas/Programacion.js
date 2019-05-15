//Add Input
const form = document.querySelector("form");
const filtro = document.querySelector(".form2");
const taskInput = document.getElementById("task");
const filterInput = document.getElementById("task2");
const list = document.querySelector("ul");
const obj = [];
let count = 0;
form.addEventListener("submit", runEvent);
filtro.addEventListener("submit", runFilter);

function runEvent(e) {
  if (taskInput.value !== "") {
    obj[count] = taskInput.value;
    count++;
    let personString = JSON.stringify(obj);
    console.log(personString);
    localStorage.setItem("Tareas", personString);
    let lis = document.querySelectorAll("li");
    lis.forEach(function(li) {
      li.remove();
    });
    let comeBack = JSON.parse(localStorage.getItem("Tareas"));
    const arrayComeBack = Array.from(comeBack);
    for (let i = 0; i < comeBack.length; i++) {
      newTask = document.createElement("li");
      newTask.setAttribute("class", "collection-item");
      newTask.innerHTML = `${
        arrayComeBack[i]
      }<a href="#" class="delete-item secondary-content"><i class="fa fa-times"/>X</i></a>`;
      list.appendChild(newTask);
    }
  }
  //Prevent empty tasks
  while (taskInput.value === "") {
    alert("Insterte alguna tarea!");
    break;
  }
  taskInput.value = "";
  e.preventDefault();
}

//Delete individual task
const bodyNode = document.body;
let dataPoint;
bodyNode.addEventListener("click", eventHandler);
function eventHandler(c) {
  if (c.target.className === "fa fa-times") {
    c.target.parentElement.parentElement.remove();
    dataPoint = c.target.parentElement.parentElement.innerText;
    obj.forEach(function(li, i) {
      if (obj[i] === dataPoint) {
        obj.splice(i, 1);
        count--;
      }
    });
  }
}

// Remove Element
const clearbtn = document.querySelector(".clear-tasks");
clearbtn.addEventListener("click", deleteList);
function deleteList(e) {
  let lis = document.querySelectorAll("li");
  lis.forEach(function(li) {
    li.remove();
  });
  localStorage.clear();
  obj.clear();
  e.preventDefault();
}

//Filter method
function runFilter(e) {
  let lis = document.querySelectorAll("li");
  lis.forEach(function(li) {
    li.remove();
  });
  let comeBack = JSON.parse(localStorage.getItem("Tareas"));
  const arrayComeBack = Array.from(comeBack);
  for (i = 0; i < obj.length; i++) {
    if (filterInput.value.toLowerCase() === obj[i].toLowerCase()) {
      newTask = document.createElement("li");
      newTask.setAttribute("class", "collection-item");
      newTask.innerHTML = `${
        arrayComeBack[i]
      }<a href="#" class="delete-item secondary-content"><i class="fa fa-times"/></a>`;
      list.appendChild(newTask);
    }
  }
  e.preventDefault();
}

//Load from local
if (localStorage.getItem("Tareas") !== null) {
  let comeBack = JSON.parse(localStorage.getItem("Tareas"));
  const arrayComeBack = Array.from(comeBack);
  //Load first time
  for (let i = 0; i < comeBack.length; i++) {
    newTask = document.createElement("li");
    newTask.setAttribute("class", "collection-item");
    newTask.innerHTML = `${arrayComeBack[i]}
<a href="#" class="delete-item secondary-content">
<i class="fa fa-times"/>
</a>`;
    list.appendChild(newTask);
  }
}
