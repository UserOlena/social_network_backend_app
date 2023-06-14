const router = require('express').Router();
const {
    createThought,
    retrieveAllThoughts,
    retrieveThoughtById,
    updateThoughtById,
} = require('../../controllers/thoughtController');

// add a new thought to the mongo DB
router.post('/createThought', createThought);

// retrieve all the thoughts from the mongo DB
router.get('/', retrieveAllThoughts);

// retrieve a thought by its ID from the mongo DB
router.get('/:thoughtId', retrieveThoughtById);

// retrieve a thought by its ID from the mongo DB
router.put('/:thoughtId', updateThoughtById);

module.exports = router;