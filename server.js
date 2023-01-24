const express  = require("express");
const connectDb = require("./config/dbconnection");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

connectDb();
const app =express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRout"));
app.use(errorHandler);
/*app.get((req,res) => {
    res.status(200).json({message:"get hello"});
});*/
app.listen(port,()=> {
    console.log(`app is running at ${port}`);
});
