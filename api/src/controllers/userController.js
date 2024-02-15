const { User, Post } =  require('../db');
const axios = require("axios");

const cleanArray = (arr) => 
    arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            email: elem.email,
            phone: elem.phone,
            created: false,
        }
    })

const getAllUsers = async () => {
    const databaseUsers = await User.findAll();

    const cleanApiRow = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

    const apiUsers = cleanArray(cleanApiRow);

    return [...databaseUsers, ...apiUsers];
}

const searchUserByName = async (name) => {
    const databaseUserName = await User.findAll({ where: {name}});

    const apiUserName = ( await axios.get("https://jsonplaceholder.typicode.com/users")).data;

    const clearApiArray = cleanArray(apiUserName);
    const filterApi = clearApiArray.filter(user => user.name === name)

    return [...databaseUserName, ...filterApi]
}

const getUserById = async (id, source) => {
    const user = source === "api" ? ( await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data : (
        await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ["title", "body"]
            },
        })
    )

    return user;
}
const createUser = async (name, email, phone) => {
    await User.create({name, email, phone})
}

module.exports = { 
    getAllUsers,
    searchUserByName,
    getUserById,
    createUser}