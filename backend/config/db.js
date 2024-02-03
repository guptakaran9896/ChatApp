const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require('dotenv');
dotenv.config();
const mongodbUrl = process.env.MONGO_URI;


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      /* useFindAndModify: true, */
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;