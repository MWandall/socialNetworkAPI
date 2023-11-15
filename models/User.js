const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: String,
    email: String,
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
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

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
