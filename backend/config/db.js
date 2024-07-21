const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS_WORD}@cluster0.fir11lf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      , {
        serverSelectionTimeoutMS: 5000,
      });
    console.log("database connected!");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connect;
