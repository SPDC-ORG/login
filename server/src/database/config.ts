import mongoose from "mongoose";

const dbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/mydatabase";

const db = mongoose.createConnection(dbUrl);

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

export default db;
