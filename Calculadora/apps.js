const inputDinero = document.getElementById("dinero");
const inputPorcentaje = document.getElementById("porcentaje");
const inputYears = document.getElementById("years");
const form = document.querySelector("form");
const list = document.querySelector(".results");
form.addEventListener("submit", calcular);

function calcular(e) {
  let iD = inputDinero.value;
  let iP = inputPorcentaje.value;
  let iY = inputYears.value;

  const months = iY * 12;
  const porcentageAnual = iD * (iP / 100);
  const pagoNeto = (iD / months) * 12;
  const total = (porcentageAnual + pagoNeto) * iY;
  const monthlyPayment = total / months;
  const totalInterest = porcentageAnual * iY;
  let lis = document.querySelectorAll("li");
  lis.forEach(function(li) {
    li.remove();
  });
  let newTask = document.createElement("ol");
  newTask.innerHTML = `
        <li>Pago Mensual: ${monthlyPayment}</li>
        <li>Pago Total: ${total}</li>
        <li>Intereses Totales: ${totalInterest}</li>
      `;
  list.appendChild(newTask);
  e.preventDefault();
}
