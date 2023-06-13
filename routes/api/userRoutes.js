const router = require('express').Router();
const { 
    createUser,
    retrieveAllUsers,
    retrieveUserById,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// create new user
router.post('/createUser', createUser);

// retrieve all the users from the mongo DB
router.get('/', retrieveAllUsers);

// retrive a user by ID
router.get('/:id', retrieveUserById);

// update user by ID
router.put('/updateUser/:userId', updateUser);

// delete user by ID
router.delete('/deleteUser/:userId', deleteUser);

module.exports = router;