document.getElementById("getText").addEventListener("click", getText);

function getText() {
  fetch("textData.txt")
    .then(function(response) {
      return response.text();
    }) //chained promise
    .then(function(data) {
      //   console.log(data);
      document.getElementById(
        "output"
      ).innerHTML = `<b>Fetch Text: [</b><i>${data}</i><b>]</b>`;
    })
    .catch(function(response) {});
}

document.getElementById("getJSON").addEventListener("click", getJson);

function getJson(e) {
  fetch("JSONdata.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(function(person) {
        output += `<li>${person.name} works for ${person.company}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

document.getElementById("getAPI").addEventListener("click", getAPI);

function getAPI() {
  fetch("https://api.coinmarketcap.com/v2/listings/")
    .then(function(response) {
      return response.json();
    })
    .then(function(coin) {
      for (let i = 1; i <= 2000; i++) {
        if (coin.data[i].name === "Mincoin") {
          console.log(coin.data[i].name);
          const coinSelected = coin.data[i].id;
          console.log(coinSelected);
          fetch(`https://api.coinmarketcap.com/v2/ticker/${coinSelected}/`)
            .then(function(respon) {
              return respon.json();
            })
            .then(function(coinS) {
              let output = `<li> ID: ${coinS.data.id} : ${coinS.data.symbol}
              ${coin.data.name} RANK ${coinS.data.rank}</li><li> Coin Value:  ${
                coinS.data.quotes.USD.price
              } </li>`;
              document.getElementById("output").innerHTML = output;
            });
        }
      }
    });
}
