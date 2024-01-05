const { nanoid } = require("nanoid");
const auth = require("../../../api/components/auth");

const TABLE = "post";

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  function remove(id) {
    return store.remove(TABLE, id);
  }

  return {
    list,
    get,
    remove,
  };
};
