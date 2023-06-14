const router = require('express').Router();
const { 
    createUser,
    retrieveAllUsers,
    retrieveUserById,
    updateUser,
    deleteUser,
    addFriendToUser,
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

// update the user's `friends` array by the user ID, including new friend's ID.
router.post('/:userId/friends/:friendId', addFriendToUser);

module.exports = router;