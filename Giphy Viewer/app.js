const gitHub = new GitHub();
const ui = new UI();
const searchUser = document.getElementById("searchUser");
const searchButton = document.getElementById("button");
let limit = 10;

searchButton.addEventListener("click", cargar);

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    gitHub.getUser(userText, limit).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("Tenga cuidado y andese precavido", "alert-danger");
      } else {
        console.log(data.profile);
        ui.showProfile(data.profile.data, limit);
      }
    });
  } else {
    ui.clearProfile();
  }
});
function cargar(e) {
  limit += 10;
  const userText = searchUser.value;
  console.log(userText);
  if (userText != "") {
    console.log(searchUser.value);
    gitHub
      .getUser(userText, limit)
      .then(data => ui.showProfile(data.profile.data, limit));
  } else {
    limit += 10;
    gitHub.getTrending(limit).then(data => {
      console.log(data.trend.data);
      ui.showTrending(data.trend.data, limit);
    });
  }
}
gitHub.getTrending(limit).then(data => {
  console.log(data.trend.data);
  ui.showTrending(data.trend.data, limit);
});
