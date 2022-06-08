const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  foundation: {
    type: Number,
  },
  races: {
    type: Number,
  },
  current_drivers: {
    type: [String],
  },
});

const Team = mongoose.model("team", teamSchema);
module.exports = Team;
