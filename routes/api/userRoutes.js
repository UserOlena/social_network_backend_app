const router = require('express').Router();
const { 
    createUser, 
} = require('../../controllers/userController');

router.post('/createUser', createUser);

module.exports = router;