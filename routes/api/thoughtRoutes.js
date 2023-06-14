const router = require('express').Router();
const {
    createThought,
    retrieveAllThoughts,
} = require('../../controllers/thoughtController');

// add a new thought to the mongo DB
router.post('/createThought', createThought);

// retrieve all the thoughts from the mongo DB
router.get('/', retrieveAllThoughts);

module.exports = router;