const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: String,
    email: String,
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

userSchema
  .virtual('getThoughts')
  // Getter
  .get(function () {
    return this.thoughts.length;
  });

  userSchema
  .virtual('friendsCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
