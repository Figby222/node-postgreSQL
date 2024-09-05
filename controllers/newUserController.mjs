import db from "../db/queries.mjs";

async function newUserFormGet(req, res) {
    res.render("newUserForm", { title: "New User" });
}

async function newUserFormPost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

export { newUserFormGet, newUserFormPost }