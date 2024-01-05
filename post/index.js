const express = require("express");

const config = require("../config");
const post = require("./components/post/network.js");
const errors = require("../network/errors");

const app = express();
app.use(express.json());

// ROUTER
app.use("/api/post", post);

app.use(errors);

app.listen(config.post.port, () => {
  console.log("Api de los POST escuchando en el puerto ", config.post.port);
});
