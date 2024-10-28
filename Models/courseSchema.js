const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  lesson: {
    type: String,
  },
  completed: {
    type: String,
  },
  student: {
    type: String,
  },
  type: {
    type: String,
  },
  rating: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  instructor: {
    avatar: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  reviews: [
    {
      name: {
        type: String,
      },
      about: {
        type: String,
      },
      date: {
        type: String,
      },
    },
  ],
});

const currentCourseModel = mongoose.model("currentcourse", courseSchema);

module.exports = { currentCourseModel };
