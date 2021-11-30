const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");


const app = express();

// Connect to MongoDB
// temporary deleted due to security
mongoose.connect("mongodb+srv://dbnovengorospe:efBaWxyisxGMqFY8@wdc028-course-booking.68ll3.mongodb.net/examDB?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology : true
	}

);
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// Defines the "users" string to be included for all user routes defined in the "user" route file
 app.use("/users", userRoutes);

 


// Listening to port
app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});
