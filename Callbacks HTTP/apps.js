//condition to fullfill the promise
let goalAchived = confirm("Did you get the grades?");

//promise
let willIgetMyNewCarr = new Promise(function(resolve, reject) {
  if (goalAchived) {
    car = {
      brand: "camaro",
      year: "1923",
      model: "488gtb",
      color: "red"
    };
    resolve(car);
  } else {
    let reason = new Error("At least you get a bike");
    reject(reason);
  }
});

let askParents = function() {
  willIgetMyNewCarr
    .then(function(newCarr) {
      document.body.innerHTML = `Congratulations you get a new car!
            <li>${newCarr.brand}</li>
            <li>${newCarr.color}</li>
            <li>${newCarr.model}</li>`;
    })
    .catch(function(message) {
      document.body.innerHTML = `Sorry: ${message}`;
    });
};

askParents();
