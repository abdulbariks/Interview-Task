const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get("/user", UserController.allUser);
router.post("/signin", UserController.signinUser);
router.post("/login", UserController.loginUser);

module.exports = router;
