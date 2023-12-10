const express = require("express");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.get("/", (req, res) => {
  Controller.list()
    .then((list) => {
      response.success(req, res, list);
    })
    .catch((err) => {
      response.error(req, res, err, 500);
    });
});

router.get("/:id", (req, res) => {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((err) => {
      response.error(req, res, err, 500);
    });
});

router.post("/", (req, res) => {
  Controller.upsert(req.body)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((err) => {
      response.error(req, res, err, 500);
    });
});

module.exports = router;
