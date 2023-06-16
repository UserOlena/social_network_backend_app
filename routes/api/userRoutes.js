const router = require('express').Router();
const { 
    createUser,
    retrieveAllUsers,
    retrieveUserById,
    updateUser,
    deleteUser,
    addFriendToUser,
    removeFriendFromUser,
} = require('../../controllers/userController');

// create new user
router.post('/', createUser);

// update the user's `friends` array by the user ID, including new friend's ID.
router.post('/:userId/friends/:friendId', addFriendToUser);

// retrieve all the users from the mongo DB
router.get('/', retrieveAllUsers);

// retrive a user by ID
router.get('/:id', retrieveUserById);

// update user by ID
router.put('/:userId', updateUser);

// delete user by ID
router.delete('/:userId', deleteUser);

// remove a friend from the user's friends array using both the user's ID and the friend's ID
router.delete('/:userId/friends/:friendId', removeFriendFromUser);

module.exports = router;