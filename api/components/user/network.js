const express = require("express");

const secure = require("./secure");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

function list(req, res, next) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list);
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch(next);
}

module.exports = router;
