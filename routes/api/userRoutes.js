const router = require('express').Router();
const { 
    createUser,
    retrieveAllUsers,
} = require('../../controllers/userController');

// create new user
router.post('/createUser', createUser);

// retrieve all the users from the mongo DB
router.get('/', retrieveAllUsers);

module.exports = router;