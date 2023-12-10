const db = {
  user: [{ id: "1", name: "Reinier" }],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  return db[table].find((it) => it.id === id) || null;
}

async function upsert(table, data) {
  if (!db[table]) db[table] = [];

  db[table].push(data);
  return data;
}

async function remove(table, id) {
  return true;
}

async function query(table, q) {
  let data = await list(table);

  return (
    data.filter((it) => {
      return Object.keys(q).every((key) => {
        return it[key] === q[key];
      });
    })[0] || null
  );
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
