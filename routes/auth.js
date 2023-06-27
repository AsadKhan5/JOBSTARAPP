const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");
const testUser = require("../middleware/testUser");
const { register, login, updateUser } = require("../controllers/auth");
const rateLimiter = require("express-rate-limit");

const apiLimiter = rateLimiter({
  windowMs: 1000 * 60 * 5,
  max: 2,
  message: {
    msg: "Too many request Please try after 5 minutes",
  },
});

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

module.exports = router;
