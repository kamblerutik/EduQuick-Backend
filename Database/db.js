const mongoose = require("mongoose");

const URI =
  "mongodb+srv://kamblerutik155:kamblerutik155@eduquick.oqdsl.mongodb.net/?retryWrites=true&w=majority&appName=EduQuick";

const ConnetDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`MongoDB error: ${error}`);
  }
};

module.exports = ConnetDB;
