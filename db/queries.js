const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(message, author) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    message,
    author,
  ]);
}

module.exports = { getAllMessages, insertMessage };
