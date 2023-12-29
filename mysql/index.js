const express = require("express");

const config = require("../config");
const errors = require("../network/errors");
const router = require("./network");

const app = express();
app.use(express.json());

// RUTES
app.use("/", router);

app.use(errors);

app.listen(config.mysqlService.port, () => {
  console.log("MySQL Service listening on port ", config.mysqlService.port);
});
