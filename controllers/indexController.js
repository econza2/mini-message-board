const db = require("../db/queries");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getIndexController(req, res) {
  const messagesDb = await db.getAllMessages();

  res.render("../views/index", {
    title: "Mini Message Board",
    messages: messagesDb,
  });
}

async function getMessagePageController(req, res) {
  const { number } = req.params;
  const messagesDb = await db.getAllMessages();

  res.render("../views/message.ejs", { message: messagesDb[number] });
}

module.exports = { getIndexController, messages, getMessagePageController };
