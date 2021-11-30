// importing the model
const User = require("../model/User");

// Controller function for getting all the user
module.exports.getAllUser = ()=>{
	return User.find({}).then(result =>{
		return result;
	})
}
// User Registration
module.exports.registerUser = (reqBody) => {
	// Creates a variable "newUser" and instantiates a new "User" object using the mongoose model
	// Uses the information from the request body to provide all the necessary information
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName:reqBody.lastName,
		address:reqBody.address
		
	})

	return newUser.save().then((user, error) => {
		if(error){
			return false;
		}
		else{
			return true;
		}
	})
}

// controller fumction for updating a user
module.exports.edituser = (userId, newStatus)=>{
	return User.findById(userId).then((result, error)=>{
		if(error){
			console.log(error);
			return false;
		}
	 result.firstName = newStatus.firstName;
	 result.lastName = newStatus.lastName;
	 result.address = newStatus.address;
		return result.save().then((updatedUser,saveErr)=>{
			if(saveErr){
				console.log(saveErr);
				return false;
			}
			else{
				return updatedUser;
			}
		})
	})
}

// controller function for delete user
module.exports.deleteUser =  async(userId) =>{
	return User.deleteOne({_id:userId}).then((removedUser, err)=>{
		if(err){
			console.log(err);
			return false;
		}
		else{
			return removedUser;
		}
	})
}


// Controller function for getting specific  User
module.exports.getSpecificUser = (userId)=>{
	return User.findById(userId).then((result,err)=>{
		if(err){
			console.log(err);
			return false;
		}
		else{
			return result;
		}
	})
}