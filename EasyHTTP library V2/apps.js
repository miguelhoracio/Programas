const url = "https://jsonplaceholder.typicode.com/users/1";
const url2 = "https://jsonplaceholder.typicode.com/users";

// get request
EasyHTTP.get(url)
  .then(users => console.log(users))
  .catch(error => console.log(error));

// post request
const userData = {
  id: "9912",
  username: "alanV",
  name: "Alan Villarreal",
  email: "alan@correo.com"
};

EasyHTTP.post(url2, userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

EasyHTTP.put(url, userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

EasyHTTP.delete(url)
  .then(response => console.log(response))
  .catch(err => console.log(err));
