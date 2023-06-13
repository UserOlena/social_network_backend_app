const router = require('express').Router();
const { 
    createUser,
    retrieveAllUsers,
    retrieveUserById,
} = require('../../controllers/userController');

// create new user
router.post('/createUser', createUser);

// retrieve all the users from the mongo DB
router.get('/', retrieveAllUsers);

// retrive a user by ID
router.get('/:id', retrieveUserById);

module.exports = router;