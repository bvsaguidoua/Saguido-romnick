const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/TaskControllers.js");

// POST /tasks/add
router.post("/add", (req, res) => {
    taskControllers.createTask(req.body).then((result) => res.send(result));
});

// GET /tasks/all
router.get("/all", (req, res) => {
    taskControllers.getAllTasks().then((result) => res.send(result));
});

// GET /tasks/:id
router.get("/:id", (req, res) => {
    taskControllers.getSpecificTask(req.params.id).then((result) => res.send(result));
});

// PUT /tasks/archive/:id
router.put("/archive/:id", (req, res) => {
    taskControllers.archiveTask(req.params.id).then((result) => res.send(result));
});

// PUT /tasks/unarchive/:id
router.put("/unarchive/:id", (req, res) => {
    taskControllers.unarchiveTask(req.params.id).then((result) => res.send(result));
});

// DELETE /tasks/delete/:id
router.delete("/delete/:id", (req, res) => {
    taskControllers.deleteTask(req.params.id).then((result) => res.send(result));
});

// PUT /tasks/update-name/:id
router.put("/update-name/:id", (req, res) => {
    taskControllers.updateTaskName(req.params.id, req.body.taskName)
        .then((resultFromController) => res.send(resultFromController));
});

// PUT /tasks/complete/:id
router.put("/complete/:id", (req, res) => {
    taskControllers.completeTask(req.params.id)
        .then((resultFromController) => res.send(resultFromController));
});

// Export the router once at the bottom
module.exports = router;