// async function myFunc() {
//   return "Hello WORLD";
// }

// myFunc().then(response => console.log(response));

// const hello = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello there"), 1000);
//   });

//   const res = await promise;
//   return res;
// };
// hello().then(response => console.log(response));

const url = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  //await for fetch call
  const response = await fetch(url);
  //proceed only when promise is resolved
  const data = await response.json();

  return data;
}

getUsers().then(users => console.log(users));
