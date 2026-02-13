
export default class User {
  constructor(name) {
    this.name = name;
    this.history = [];
  }

  addHistory(message, response) {
    this.history.push({ message, response });
  }

  getHistory() {
    return this.history;
  }
}
