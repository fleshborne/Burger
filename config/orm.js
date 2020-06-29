const connection = require("./connection");

/* In the orm.js file, 
create the methods that will execute the necessary MySQL commands in the controllers. 
These are the methods you will need to use in order to retrieve and store data in your database. 
*/
function printQuestionMarks(num) {
  const arr = [];
  for (const i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  const arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    const value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf("") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: Cheese Burger} => ["name='Cheese Burger'"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-seperated string
  return arr.toString();
}

const orm = {
  all: (tableInput, cb) => {
    let query = `SELECT * FROM ${tableInput};`;
    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, cols, vals, cb) => {
    let query = `INSERT INTO ${table}`;
    query += " (";
    query += cols.to();
    query += ") ";
    query += "VALUES (";
    query += printQuestionMarks(vals.length);
    query += ") ";
    console.log(query);

    connection.query(query, vals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: (table, ObjColVals, condition, cb) => {
    let query = "UPDATE " + table;

    query += " SET ";
    query += objToSql(objColVals);
    query += " WHERE ";
    query += condition;

    console.log(query);
    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: (table, condition, cb) => {
    let query = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
// class orm {
//   selectAll() {
//     return this.connection.query("SELECT * FROM burgers;"), (err, res) => {
//       if (err) {
//         throw err;
//       }

//     };
//   }

//   insertOne() {
//     return this.connection.query(
//       "INSERT INTO burgers (burger_name, devoured) VALUES (?,false);",
//       [value]
//     );
//   }

//   updateOne() {
//     return this.connection.query(
//       "UPDATE burgers SET devoured = ? WHERE id = ?;",
//       [devoured, id]
//     );
//   }
// }

module.exports = orm;
