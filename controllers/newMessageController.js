const db = require("../db/queries");

let { messages } = require("./indexController");

async function getNewMessageController(req, res) {
  res.render("../views/form");
}

async function createNewMessageController(req, res) {
  await db.insertMessage(req.body.message, req.body.author);
  res.redirect("/");
}

module.exports = { getNewMessageController, createNewMessageController };
