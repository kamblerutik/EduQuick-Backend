const express = require("express");
const router = express.Router();
const Controller = require("../Controllers/courseController");

router.route("/home").get((req, res) => {
  res.json({
    name: "Rutik",
    sirname: "Kamble",
  });
});

router.route("/courses").get(Controller.getCurrentLearning);
router.route("/course/:id").get(Controller.getSpecificCourse);

module.exports = router;
