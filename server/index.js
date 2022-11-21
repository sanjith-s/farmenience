const express = require("express");
const mongoose = require("mongoose"); 
const app = express();
app.use(express.json())
// const Credentials = require("./models/credentials")
const dbURI = 'mongodb+srv://Farmenience:Farm123@cluster0.ocxfoad.mongodb.net/?retryWrites=true&w=majority';
app.listen(3001,()=>{
    console.log("Server is running");
});
async function connect() {
    try {
      mongoose.connect(dbURI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  }
  connect()