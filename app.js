const path = require("node:path");

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const { indexRouter } = require("./routes/indexRouter");
const { newMessageRouter } = require("./routes/newMessageRouter");

app.use(express.urlencoded({ extended: true }));

app.use("/new", newMessageRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
