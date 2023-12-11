function err(message, code) {
  let e = new Error(message);
  if (code) {
    e.satusCode = code;
  }
  return e;
}

module.exports = err;
