const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:fullstack@localhost:27017/f1?authSource=admin"
    );
    console.log("Mongoose connected");
  } catch (e) {
    console.error(`Couldnt connect to MongoDB with mongoose | error: ${e}`);
  }
};

module.exports = { connect };
