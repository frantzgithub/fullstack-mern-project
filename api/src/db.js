
const { Sequelize } = require('sequelize');
const userModel = require('./models/userModel');
const post = require('./models/postModel');

require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/fullstack`, 
{logging: false});

userModel(sequelize);
post(sequelize)

const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {sequelize, ...sequelize.models};

//https://jsonplaceholder.typicode.com/users