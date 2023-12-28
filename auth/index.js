const jwt = require("jsonwebtoken");
const {
  jwt: { secret },
} = require("../config");
const error = require("../utils/error");

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    if (decoded.id !== owner) {
      throw error("You don't own this resource", 401);
    }

    return true;
  },

  logged: (req) => {
    return decodeHeader(req);
  },
};

function decodeHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  try {
    const decoded = verify(token);
    req.user = decoded;
    return decoded;
  } catch (error) {
    throw error("Invalid token", 401);
  }
}

function getToken(auth) {
  if (!auth) {
    throw error("No token", 401);
  }

  if (auth.indexOf("Bearer ") === -1) {
    throw error("Invalid token", 401);
  }

  let token = auth.split(" ")[1];
  return token;
}

module.exports = {
  sign,
  check,
};
