const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: [true, 'Required field'],
      maxlength: 280,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;