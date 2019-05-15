class EasyHTTP {
  static async get(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  static async put(url, putData) {
    const request = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      bosy: JSON.stringify(putData)
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return data;
  }

  static async post(url, putData) {
    const request = {
      method: "post",
      headers: { "Content-type": "application/json" },
      bosy: JSON.stringify(putData)
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return data;
  }
  static async delete(url) {
    const request = {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return data;
  }
}
