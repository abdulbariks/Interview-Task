const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/task.controller");

router.get("/", TaskController.allTask);
router.get("/:id", TaskController.allSingleTask);
router.post("/create", TaskController.createTask);
router.put("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
