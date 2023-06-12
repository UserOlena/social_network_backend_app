const { User } = require('../models');

// add new user to the mongo DB
const createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username.trim(),
            email: req.body.email.toLowerCase().trim(),          
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

// retrieve all the users from the mongo DB
const retrieveAllUsers = async (req, res) => {
    try {
        console.log('get')
        const usersData = await User.find();
        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createUser,
    retrieveAllUsers,
}