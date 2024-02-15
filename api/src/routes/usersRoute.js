const { Router } = require("express");
const { getUsers, 
    getUser, 
    postUser 
} = require("../handlers/userHandlers");
const { isBodyValid } = require("../middleware/userMiddleware");

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', isBodyValid, postUser);

module.exports = usersRouter;