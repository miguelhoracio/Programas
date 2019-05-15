class EasyHTTP {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  static post(url, postData) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        bosy: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  static put(url, postData) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        bosy: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
      })
        .then(response => resolve(response.json()))
        .catch(err => reject(err));
    });
  }
}
