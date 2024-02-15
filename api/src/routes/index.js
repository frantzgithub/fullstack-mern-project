const { Router } = require("express");
const usersRouter = require("./usersRoute");
const postsRouter = require("./postsRoute");

const mainRouter = Router()

mainRouter.use('/users', usersRouter);
mainRouter.use('/posts', postsRouter);

mainRouter.get('/', (req, res) => {
    res.status(200).send("ok")
})

module.exports = mainRouter;