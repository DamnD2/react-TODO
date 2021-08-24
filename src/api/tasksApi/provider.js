import { converter } from "./converter";

class TaskApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  getUrlWithQueries(queries) {
    return `${this.url}?${queries}`;
  }

  get getTasks() {
    const resultUrl = this.getUrlWithQueries('userId=1');

    return fetch(resultUrl)
      .then((response) => response.json())
      .then((data) => converter(data));
  }
}

export default new TaskApi({ url: 'https://jsonplaceholder.typicode.com/todos' });
