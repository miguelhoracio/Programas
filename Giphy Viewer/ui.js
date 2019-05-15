class UI {
  constructor() {
    this.profile = document.getElementById("coins");
  }
  showProfile(user, limit) {
    console.log(user.url);
    let output = "";
    for (let i = 0; i < limit; i++) {
      output += `<div class="coin">
    <img src="${user[i].images.downsized.url}">
  </div>
    `;
    }
    this.profile.innerHTML = output;
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
  showTrending(user, limit) {
    let output = "";
    console.log(user);
    for (let i = 0; i < limit; i++) {
      output += `<div class="coin">
    <img src="${user[i].images.downsized.url}">
  </div>
    `;
    }
    this.profile.innerHTML = output;
  }
}
