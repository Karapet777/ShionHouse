class Service {
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  _request = (method, url, data = null) => {
    return fetch(`${this.baseUrl}${url}.json`, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : null,
    }).then((res) => {
      if (res.status < 400) {
        return res.json();
      } else {
        const err = new Error("Network Error:Status code 400 and higher");
        throw err;
      }
    });
  };

  getPosts = (start, limit = 9) => {
    this._request("GET", `/posts?_start=${start}&_limit=${limit}`);
  };
}

export default new Service();
