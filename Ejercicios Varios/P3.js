const libro = new Libro();
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputISBN = document.getElementById("isbn");
const form = document.querySelector("form");
const table = document.querySelector("tbody");
const bodyNode = document.body;
let dataPoint;
form.addEventListener("submit", añadir);
bodyNode.addEventListener("click", eventHandler);

function añadir(e) {
  let it = inputTitle.value;
  let ia = inputAuthor.value;
  let ii = inputISBN.value;

  const libroAñadido = new Libro(it, ia, ii);
  libroAñadido.addData();
  e.preventDefault();
}

function eventHandler(c) {
  if (c.target.className === "fa fa-times") {
    confirmarEliminar = confirm("Esta seguro de eliminar este libro?");
    if (confirmarEliminar) {
      c.target.parentElement.parentElement.parentNode.remove();
      libro.showAlert("Libro eliminado", "alert-danger");
    }
  }
}
