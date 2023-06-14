const { User, Thought } = require('../models');
const { rawListeners } = require('../models/User');

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

// update user by ID 
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { email: req.body.email },
            { new: true },
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// delete user by ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// update the user's `friends` array by the user ID, including new friend's ID.
const addFriendToUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true },
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// remove a friend from the user's friends array using both the user's ID and the friend's ID
const removeFriendFromUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $pull: {
                friends: req.params.friendId,
            } },
            { new: true },
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    createUser,
    retrieveAllUsers,
    retrieveUserById,
    updateUser,
    deleteUser,
    addFriendToUser,
    removeFriendFromUser,
}