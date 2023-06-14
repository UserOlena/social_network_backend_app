const { User, Thought } = require('../models');

// add a new thought to the mongo DB and pushing its ID to the user's array
const createThought = async (req, res) => {
    try {
        // create new thought in the mongo DB
        const newThought = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username,
        });
    
        // update user by including thought ID in the thoughts array
        if (newThought) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: newThought.id } },
                { new: true },
            );

            res.status(200).json( { newThought, updatedUser } );
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// retrieve all the thoughts from the mongo DB
const retrieveAllThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thought.find();
        res.status(200).json(thoughtsData);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// retrieve a thought by its ID from the mongo DB
const retrieveThoughtById = async (req, res) => {
    try {
        const thoughtData = await Thought.findById(
            { _id: req.params.thoughtId },
        );
        res.status(200).json(thoughtData);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// update a thought by its ID
const updateThoughtById = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { thoughtText: req.body.thoughtText },
            { new: true },
        );
        res.status(200).json(updatedThought);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    createThought,
    retrieveAllThoughts,
    retrieveThoughtById,
    updateThoughtById,
}