import db from "../db/queries.mjs";

async function usersListGet(req, res) {
    if (req.query.search) {
        const usernames = await db.searchUsername(req.query.search);
        console.log("Usernames: ", usernames);
        return res.render("usersList", { title: "Users Search", users: usernames });
    }

    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("usersList", { title: "Usernames", users: usernames });
}

async function deleteUsersPost(req, res) {
    await db.deleteAllUsernames();
    console.log("Usernames deleted");
    return res.redirect("/");
}

export { usersListGet, deleteUsersPost }