const myTweets = [
  {
    id: "101",
    account: "@LinusTorvald",
    body: "Que onda raza wasaaaaaaa!",
    replays: 1,
    retweets: 120,
    likes: 3432
  },
  {
    id: "102",
    account: "@LinusTorvald",
    body: "Aprendi ingles y ahora no se como hablar español de nuevo!",
    replays: 1,
    retweets: 120,
    likes: 3432
  },
  {
    id: "103",
    account: "@LinusTorvald",
    body: "I don remember even how to write",
    replays: 1,
    retweets: 120,
    likes: 3432
  }
];

const tweet104 = {
  id: "104",
  account: "@LinusTorvald",
  body: "Que onda raza wasaaaaaaa!",
  replays: 1,
  retweets: 120,
  likes: 3432
};

const enviarTweet = confirm("Crear nuevo tweet?");

function crearTweet(nuevo) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      myTweets.push(nuevo);
      if (enviarTweet) {
        resolve();
      } else {
        reject("Todo se fue al carajo");
      }
    }, 2000);
  });
}
function showTweets() {
  let output = "";
  myTweets.forEach(function(tweet) {
    output += `<li>${tweet.id} ${tweet.account} ${tweet.body}</li>`;
  });
  document.body.innerHTML = output;
}

crearTweet(tweet104)
  .then(showTweets)
  .catch(function(error) {
    alert(error);
  });
