import pool from "./pool.mjs";

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM USERNAMES");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES($1)", [username]);
}

async function searchUsername(subString) {
    const { rows } = await pool.query("SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER($1)", ['%' + subString + '%']);


    return rows;
}

async function deleteAllUsernames() {
    await pool.query("DELETE FROM usernames");

}

export default { getAllUsernames, insertUsername, searchUsername, deleteAllUsernames }