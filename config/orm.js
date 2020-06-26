const connection = require("./connection");

/* In the orm.js file, 
create the methods that will execute the necessary MySQL commands in the controllers. 
These are the methods you will need to use in order to retrieve and store data in your database. 
*/

class orm {
  selectAll() {
    return this.connection.query("SELECT * FROM burgers;");
  }

  insertOne() {
    return this.connection.query(
      "INSERT INTO burgers (burger_name, devoured) VALUES (?,false);",
      [value]
    );
  }

  updateOne() {
    return this.connection.query(
      "UPDATE burgers SET devoured = ? WHERE id = ?;",
      [devoured, id]
    );
  }
}

module.exports = orm;
