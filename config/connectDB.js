//mongoose
const mongoose = require("mongoose");

//connect db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database connected ...");
  } catch (error) {
    console.log("can't connect with DB!!", error);
  }
};
module.exports = connectDB;
