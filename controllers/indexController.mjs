import db from "../db/queries.mjs";

async function usersListGet(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("usersList", { title: "Usernames", users: usernames });
}

export { usersListGet }