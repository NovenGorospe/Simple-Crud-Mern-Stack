const mongoose = require("mongoose");

//  Creat euser with the following properties
const userSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : [true, "Email is required"]
	},
	lastName : {
		type : String,
		required : [true, "Email is required"]
	},
	address : {
		type : String,
		required : [true, "Address is required"]
	}
	


});
	
module.exports = mongoose.model("User", userSchema);
