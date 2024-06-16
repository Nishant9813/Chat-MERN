//express configuration
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   //root route http://localhost:5000/
//   res.send("Hello I am here I am nishant");
// });

//use middlewares for routing
app.use("/api/auth", authRoutes);

//server listening
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
