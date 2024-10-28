const courseModel = require("../Models/courseSchema");

const getCurrentLearning = async (req, res) => {
  try {
    const courses = await courseModel.currentCourseModel.find();
    res.json({
      status: "success",
      courses,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSpecificCourse = async (req, res) => {
  try {
    const course = await courseModel.currentCourseModel.findById(req.params.id);
    console.log(req.params.id);

    res.json({
      status: "success",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCurrentLearning, getSpecificCourse };
