document.getElementById("button1").addEventListener("click", loadCustomer);

//single customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "custome.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li> ID: ${customer.id} </li>
        <li> Name: ${customer.name} </li>
        <li> Company: ${customer.company} </li>
        <li> Phone: ${customer.phone} </li>
      </ul>`;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}
document.getElementById("button2").addEventListener("click", loadListOfClients);
//Multiple customers
function loadListOfClients(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "listOfCustomers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const listOfCustomer = JSON.parse(this.responseText);
      let output = "";
      listOfCustomer.forEach(function(customer) {
        output += `
        <ul>
          <li> ID: ${customer.id} </li>
          <li> Name: ${customer.name} </li>
          <li> Company: ${customer.company} </li>
          <li> Phone: ${customer.phone} </li>
        </ul>`;
      });
      document.getElementById("List-of-customers").innerHTML = output;
    }
  };

  xhr.send();
}
