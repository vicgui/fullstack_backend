const mongoose = require("mongoose");
const { Schema } = mongoose;

const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  birth: {
    type: Number,
  },
  country: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Driver = mongoose.model("driver", driverSchema);
module.exports = Driver;
