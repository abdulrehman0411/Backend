const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", UsersSchema);
module.exports = Users;
