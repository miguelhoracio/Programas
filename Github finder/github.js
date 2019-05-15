class GitHub {
  constructor() {
    this.client_id = "77e9e2406bc894143e53"; //From GitHub OAuth App
    this.client_secret = "d91083f23864c2ad60652a7a3ddcd40894391ddf";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }$client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos`
    );

    const repos = await reposResponse.json();

    const profile = await profileResponse.json();

    return { profile, repos };
  }
}
