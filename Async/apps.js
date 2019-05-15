// GET
const url = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/users/2";
// EasyHTTP.get(url)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));

const userData = {
  id: "9912",
  username: "alanV",
  name: "Alan Villarreal",
  email: "alan@correo.com"
};

// EasyHTTP.put(url, userData)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));

EasyHTTP.post(url, userData)
  .then(users => console.log(users))
  .catch(err => console.log(err));

EasyHTTP.delete(url2)
  .then(users => console.log(users))
  .catch(err => console.log(err));
