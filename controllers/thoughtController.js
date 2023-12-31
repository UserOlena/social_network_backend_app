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
                { $push: { thoughts: newThought._id } },
                { new: true },
            );
            if (!updatedUser) {
                const deletedThought = await Thought.findByIdAndDelete(
                    { _id: newThought._id },
                );
                res.status(404).json({ message: 'Thought couldn\'t be saved because the user with the provided ID doesn\'t exist' });
                return;
            }
            res.status(200).json({ newThought });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// retrieve all the thoughts from the mongo DB
const retrieveAllThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thought.find();

        if (thoughtsData.length > 0) {
            res.status(200).json(thoughtsData);
        } else {
            res.status(404).json({ message: 'Thoughts couldn\'t be found.' });
        }
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
        if (thoughtData) {
            res.status(200).json(thoughtData);
        } else {
            res.status(404).json({ message: 'Thought with the provided ID doesn\'t exist' });
        }
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
        if (updatedThought) {
            res.status(200).json(updatedThought);
        } else {
            res.status(404).json({ message: 'Thought with the provided ID doesn\'t exist' });
        }        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// remove a thought by its ID
const removeThoughtById = async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(
            { _id: req.params.thoughtId },
        );
        if (!deletedThought) {
            res.status(404).json({ message: 'Thought with the provided ID doesn\'t exist' });
            return;
        }
        res.status(200).json(deletedThought);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// include a reaction to a specific thought using the thought's ID.
const addReactionToThought = async (req, res) => {
    const { reactionBody, username } = req.body;
    const newReactionContent = { reactionBody, username };

    try {
        const thoughtData = await Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: {
                reactions: newReactionContent,
            } },
            { new: true },
        );
        if (!thoughtData) {
            res.status(404).json({ message: 'Thought with the provided ID couldn\'t be found.' });
        }
        res.status(200).json(thoughtData);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// remove a reaction by its ID from a specific thought using the thought's ID.
const removeReactionFromThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: {
                reactions: { reactionId: req.body.reactionId },
            } },
            { new: true },
        );
        if (!updatedThought) {
            res.status(404).json({ message: 'Thought with the provided ID couldn\'t be found.' });
        } else {
            res.status(200).json(updatedThought);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    createThought,
    retrieveAllThoughts,
    retrieveThoughtById,
    updateThoughtById,
    removeThoughtById,
    addReactionToThought,
    removeReactionFromThought,
}