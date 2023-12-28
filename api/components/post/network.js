const express = require("express");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.get("/", list);

function list(req, res, next) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list);
    })
    .catch(next);
}

module.exports = router;
