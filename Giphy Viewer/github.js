class GitHub {
  constructor() {
    this.client_id = "JvdYvPFWqV5SRiP6PATPbNcL0SVUeYB0"; //From GitHub OAuth App
  }

  async getUser(user, limit) {
    const profileResponse = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=JvdYvPFWqV5SRiP6PATPbNcL0SVUeYB0&q=${user}&limit=${limit}`
    );
    const profile = await profileResponse.json();

    return { profile };
  }
  async getTrending(limit) {
    const trending = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=JvdYvPFWqV5SRiP6PATPbNcL0SVUeYB0&limit=${limit}`
    );
    const trend = await trending.json();

    return { trend };
  }
}
