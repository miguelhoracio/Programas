const gitHub = new GitHub();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    gitHub.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("Tenga cuidado y andese precavido", "alert-danger");
      } else {
        console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
