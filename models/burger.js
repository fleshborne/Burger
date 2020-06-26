const orm = require("../config/orm");
const query = new orm();
// Create burger class

class Burger {
  constructor() {}
  selectAll() {
    return query.selectAll();
  }

  insertOne(name) {
    return query.insertOne(name);
  }
  updateOne(id, state) {
    return query.updateOne(id, state);
  }
}

module.exports = Burger;
