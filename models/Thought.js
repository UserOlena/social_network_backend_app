const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// define new schema for Thoughts
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: [true, 'Thought content is required.'],
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleDateString(),
    },
    username: {
        type: String,
        required: [true, 'The username is required in order to create thought.'], 
    },
    reactions: [reactionSchema],
},
{
    toJSON:{
        virtuals: true,
        getters: true,
    },
    id: false,
}
);

// create virtual reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// define new Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;