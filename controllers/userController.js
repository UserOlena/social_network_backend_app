const { User } = require('../models');

const createUser = async (req, res) => {
    try {
        console.log('post')
        const newUser = await User.create({
            username: req.body.username.trim(),
            email: req.body.email.toLowerCase().trim(),          
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    createUser,
}