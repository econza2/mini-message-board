const { Router } = require("express");

const {
  getIndexController,
  getMessagePageController,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getIndexController);
indexRouter.get("/:number", getMessagePageController);

module.exports = { indexRouter };
