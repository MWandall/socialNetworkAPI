const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

// Create a virtual property `Reactions` that gets the amount of Reaction per thought
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
