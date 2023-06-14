const { User, Thought } = require('../models');

// add a new thought to the mongo DB
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

//
const retrieveAllThoughts = async (req, res) => {
    try {
        const thoughtsData = await Thought.find();
        res.status(200).json(thoughtsData);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    createThought,
    retrieveAllThoughts,
}