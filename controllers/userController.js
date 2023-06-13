const { User, Thought } = require('../models');

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
        const usersData = await User.find();
        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json(error);
    }
}

// retrive a user by ID with Thoughts and Friends data
const retrieveUserById = async (req, res) => {
    try {
        const userData = await User.findById(req.params.id).populate('thoughts friends');
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createUser,
    retrieveAllUsers,
    retrieveUserById,
}