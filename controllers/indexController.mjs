import db from "../db/queries.mjs";

async function usersListGet(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames" + usernames.map(user => user.username).join(", "));
}

export { usersListGet }