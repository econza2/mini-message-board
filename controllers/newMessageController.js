let { messages } = require("./indexController");

let getNewMessageController = (req, res) => {
  res.render("../views/form");
};

let createNewMessageController = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
};

module.exports = { getNewMessageController, createNewMessageController };
