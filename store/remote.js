const axios = require("axios");

function createRemoteDB(host, port) {
  const URL = `http://${host}:${port}`;

  function list(table) {
    return axios
      .get(`${URL}/${table}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  function get(table, id) {
    return axios
      .get(`${URL}/${table}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  function upsert(table, data) {
    return axios
      .put(`${URL}/${table}`, data)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }

  function query(table) {}

  return {
    list,
    get,
    upsert,
    query,
  };
}

module.exports = createRemoteDB;
