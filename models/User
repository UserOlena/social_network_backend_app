const { Schema, model } = require('mongoose');

// define new schema for user
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: [true, 'Provided username address already exists!'],
        required: [true, 'Username is required!'],
    },
    email: {
        type: String,
        unique: [true, 'Provided email address already exists!'],
        required: [true, 'Email address is required!'],
        validate: {
            validator: function(value) {
                return /^[^\s@]{3,}@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    thoughts: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Thought' ,
        }
    ],
    friends: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'User' ,
        }
    ],
},
{
    virtuals: {
        friendCount: {
            get() {
                return this.friends.length
            }
        }
    }
},
{
    toJSON: {
        virtuals: true,
    },
},
);

// define new model
const User = model('User', userSchema)

module.exports = User;