const router = require("express").Router();
const celebs = require("./celebrities.routes")
const movies = require("./movies.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
