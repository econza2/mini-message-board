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

let getIndexController = (req, res) => {
  res.render("../views/index", {
    title: "Mini Message Board",
    messages: messages,
  });
};

let getMessagePageController = (req, res) => {
  const { number } = req.params;

  res.render("../views/message.ejs", { message: messages[number] });
};

module.exports = { getIndexController, messages, getMessagePageController };
