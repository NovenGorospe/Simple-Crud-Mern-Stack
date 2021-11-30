// setup express dependency
const express = require("express");
// create a router instance
const router = express.Router();
// iport TaskController.js
const userController = require("../controller/userController");

// Routes

// Route for registering a user
router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

// Route for updating  a person 
router.put("/:id", (req,res)=>{
	userController.edituser(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})

//  Route for deleting a task
//localhost:3001/tasks/3313113131
router.delete("/:id", (req, res)=>{
	userController.deleteUser(req.params.id).then(resultFromController => res.send(resultFromController));
})


// Routes to get all task
router.get("/", (req,res)=>{
	userController.getAllUser().then(resultFromController => res.send(resultFromController));
})

module.exports = router