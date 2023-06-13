const router = require('express').Router();
const {
    createThought,
} = require('../../controllers/thoughtController');

// 
router.post('/createThought', createThought);

module.exports = router;