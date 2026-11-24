const Task = require("../models/Task.js");

module.exports.createTask = (reqBody) => {
    return Task.findOne({ taskName: reqBody.taskName })
    .then((result) => {
        if (result != null && result.taskName == reqBody.taskName) {
            return {
                code: 200,
                message: "Oops! Duplicate task found!",
                data: result
            };
        } else {
            let newTask = new Task({
                taskName: reqBody.taskName
            });

            return newTask.save().then((savedTask) => {
                return {
                    code: 201,
                    message: `${reqBody.taskName.toUpperCase()} is now added!`
                };
            });
        }
    })
    .catch((err) => {
        return {
            code: 500,
            message: "There is a problem while saving the task."
        };
    });
};

module.exports.getAllTasks = () => {
    return Task.find({}).then((result) => {
        if (!result || result.length === 0) {
            return {
                code: 200,
                message: "There is no task added yet."
            };
        } else {
            return {
                code: 200,
                message: "Getting all tasks. Success!",
                data: result
            };
        }
    });
};

module.exports.getSpecificTask = (taskId) => {
    return Task.findById(taskId)
    .then((result) => {
        if (!result) {
            return {
                code: 404,
                message: "Task not found."
            };
        }
        return {
            code: 200,
            message: "Task found successfully!",
            data: result
        };
    })
    .catch((err) => {
        return {
            code: 500,
            message: "Error retrieving task."
        };
    });
};

module.exports.archiveTask = (taskId) => {
    return Task.findByIdAndUpdate(
        taskId,
        { isActive: false },
        { new: true, runValidators: true }
    )
    .then((result) => {
        if (!result) {
            return {
                code: 404,
                message: "Task not found."
            };
        }
        return {
            code: 200,
            message: "Task archived successfully!",
            data: result
        };
    })
    .catch((err) => {
        return {
            code: 500,
            message: "Error archiving task."
        };
    });
};

module.exports.unarchiveTask = (taskId) => {
    return Task.findByIdAndUpdate(
        taskId,
        { isActive: true },
        { new: true, runValidators: true }
    )
    .then((result) => {
        if (!result) {
            return {
                code: 404,
                message: "Task not found."
            };
        }
        return {
            code: 200,
            message: "Task unarchived successfully!",
            data: result
        };
    })
    .catch((err) => {
        return {
            code: 500,
            message: "Error unarchiving task."
        };
    });
};

module.exports.deleteTask = (taskId) => {
    return Task.findByIdAndDelete(taskId)
    .then((result) => {
        if (!result) {
            return {
                code: 404,
                message: "Task not found."
            };
        }
        return {
            code: 200,
            message: "Task deleted successfully!",
            data: result
        };
    })
    .catch((err) => {
        return {
            code: 500,
            message: "Error deleting task."
        };
    });
};

module.exports.updateTaskName = (taskId, newName) => {
    if (!newName || typeof newName !== "string" || newName.trim() === "") {
        return Promise.resolve({
            code: 400,
            message: "Task name is required and cannot be empty."
        });
    }

    return Task.findByIdAndUpdate(
        taskId,
        { taskName: newName.trim() },
        { new: true, runValidators: true }
    )
    .then((result) => {
        if (!result) {
            return {
                code: 404,
                message: "Task not found."
            };
        }
        return {
            code: 200,
            message: "Task name updated successfully!",
            data: result
        };
    })
    .catch((err) => {
        return {
            code: 500,
            message: "Error updating task name."
        };
    });
};

module.exports.completeTask = (taskId) => {
    return Task.findByIdAndUpdate(
        taskId,
        { status: "completed" },
        { new: true }
    )
    .then((result) => {
        if (!result) {
            return {
                code: 404,
                message: "Task not found."
            };
        }
        return {
            code: 200,
            message: "Task completed successfully!",
            data: result
        };
    })
    .catch((err) => {
        return {
            code: 500,
            message: "Error completing task."
        };
    });
};