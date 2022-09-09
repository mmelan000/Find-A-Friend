const router = require("express").Router();

router.get("/", async (req, res) => {

    res.render("home", {
        posts: [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    })
})

module.exports = router;
