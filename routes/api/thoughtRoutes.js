const router = require('express').Router();
const {
    createThought,
    retrieveAllThoughts,
    retrieveThoughtById,
    updateThoughtById,
    removeThoughtById,
    addReactionToThought,
    removeReactionFromThought,
} = require('../../controllers/thoughtController');

// add a new thought to the mongo DB
router.post('/createThought', createThought);

// retrieve all the thoughts from the mongo DB
router.get('/', retrieveAllThoughts);

// retrieve a thought by its ID from the mongo DB
router.get('/:thoughtId', retrieveThoughtById);

// retrieve a thought by its ID from the mongo DB
router.put('/:thoughtId', updateThoughtById);

// remove a thought by its ID from the mongo DB
router.delete('/:thoughtId', removeThoughtById);

//  create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', addReactionToThought);

//  create a reaction stored in a single thought's reactions array field
router.delete('/:thoughtId/reactions', removeReactionFromThought);

module.exports = router;