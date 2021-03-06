const express = require("express");
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const app = express();
// const path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App now listening at ${PORT}`);
});
