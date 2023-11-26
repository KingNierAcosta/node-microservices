const db = {
  user: [{ id: 1, name: "Reinier" }],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  return db[table].find((it) => it.id === id) || null;
}

function upsert(table, data) {
  db[table].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
