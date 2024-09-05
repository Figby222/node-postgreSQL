import pool from "./pool.mjs";

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM USERNAMES");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES($1)", [username]);
}

export default { getAllUsernames, insertUsername }