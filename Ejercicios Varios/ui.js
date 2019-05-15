class Libro {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  addData() {
    if (this.title !== "" && this.author !== "" && this.isbn !== "") {
      this.showAlert("Libro Añadido", "alert-danger");
      let newTask = document.createElement("tr");
      newTask.className = "special";
      newTask.innerHTML = `
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.isbn}</td>
        <td><a href="#" class="delete-item secondary-content"><i class="fa fa-times"/>X</i></a></td>
      `;
      table.appendChild(newTask);
    } else {
      this.showAlert("Hay campos sin llenar", "alert-danger");
    }
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");

    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert-danger");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
