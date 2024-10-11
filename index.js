const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route.js");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//database connection
mongoose
  .connect(
    "mongodb+srv://rehman:rehman@medmod.72nyy.mongodb.net/Users?retryWrites=true&w=majority&appName=MedMod"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("connection failed");
  });
