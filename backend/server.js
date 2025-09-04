const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const chatRoutes = require("./routes/chatRoutes");
app.use("/api/chat", chatRoutes);


// Basic route
app.get("/", (req, res) => {
  res.send("Construction Chatbot Backend is running 🚀");
});

// MongoDB connection (we will configure later)
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/chatbot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
