const { 
    getAllUsers,
    searchUserByName,
    getUserById, createUser } = require("../controllers/userController")

const getUsers = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchUserByName(name) : await getAllUsers();

    res.status(200).json(results)
};

const getUser = async (req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "db" : "api"

   try {
    const user = await getUserById(id, source);
    res.status(200).json(user);
   } catch (error) {
    res.status(400).json({error: error.message});
   }
};

const postUser = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newUser = await createUser(name, email, phone)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = { 
    getUsers, 
    getUser, 
    postUser 
};