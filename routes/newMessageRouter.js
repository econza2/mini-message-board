const { Router } = require("express");

const newMessageRouter = Router();

const {
  getNewMessageController,
  createNewMessageController,
} = require("../controllers/newMessageController");

newMessageRouter.get("/", getNewMessageController);
newMessageRouter.post("/", createNewMessageController);

module.exports = { newMessageRouter };
