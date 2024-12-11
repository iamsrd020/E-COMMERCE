const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("MongoDB connected successfully to DATABASE!!🚀🚀");
    console.log(`Server is running on port ${PORT} 💻`);
  });
});
