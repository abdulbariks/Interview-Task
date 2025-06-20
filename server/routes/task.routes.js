const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/task.controller");

router.get("/", TaskController.allTask);
router.post("/create", TaskController.createTask);

module.exports = router;
