const { Router } = require("express");
const { createPostHandler } = require("../handlers/postHandler");

const postsRouter = Router();

postsRouter.get('/', (req, res) => {
    res.send("I am in the post")
})

postsRouter.post('/', createPostHandler)

module.exports = postsRouter;