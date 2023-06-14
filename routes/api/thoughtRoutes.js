const router = require('express').Router();
const {
    createThought,
    retrieveAllThoughts,
    retrieveThoughtById,
} = require('../../controllers/thoughtController');

// add a new thought to the mongo DB
router.post('/createThought', createThought);

// retrieve all the thoughts from the mongo DB
router.get('/', retrieveAllThoughts);

// retrieve all the thoughts from the mongo DB
router.get('/:thoughtId', retrieveThoughtById);

module.exports = router;