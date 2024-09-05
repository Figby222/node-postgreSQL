function newUserFormGet(req, res) {
    res.render("newUserForm", { title: "New User" });
}

function newUserFormPost(req, res) {
    console.log("Username to be saved: ", req.body.username);
}

export { newUserFormGet, newUserFormPost }