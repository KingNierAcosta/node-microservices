const auth = require("../../../auth");
const TABLE = "auth";

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");

  async function login(username, password) {
    const data = await store.query(TABLE, { username });
    console.log(data);
    if (data.password === password) {
      // Generate tocken
      return auth.sign(data);
    } else {
      throw new Error("Invalid credentials");
    }
  }

  function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
    login,
  };
};