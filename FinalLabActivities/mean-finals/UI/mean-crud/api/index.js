// This file is saved inside the 'api' folder.

const express = require("express");
const { MongoClient } = require("mongodb");
const dns = require("dns");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb://localhost:27017";

const DATABASENAME = "MyDb";
let database;

// Middleware instantiation
app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

console.log("Starting API...");
console.log("Connecting to MongoDB...");

async function start() {
  try {
    // Create client with timeouts so you see errors quickly
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000, // 10s
      connectTimeoutMS: 10000,
    });

    await client.connect();

    database = client.db(DATABASENAME);
    console.log("Yay! Now connected to Cluster");

    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

start();

// ROUTES TO ALL METHODS

// Get all books
app.get("/api/books/GetBooks", async (req, res) => {
  try {
    const result = await database.collection("Books").find({}).toArray();
    res.send(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Add a book
app.post("/api/books/AddBook", multer().none(), async (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      desc: req.body.description,
      price: Number(req.body.price) || 0,
      author: req.body.author || "",
      year: req.body.year ? Number(req.body.year) : null
    };
    await database.collection("Books").insertOne(newBook);
    // Immediately fetch and return the updated list
    const result = await database.collection("Books").find({}).toArray();
    res.json(result);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Delete book
app.delete("/api/books/DeleteBook", async (req, res) => {
  try {
    const { ObjectId } = require("mongodb");
    let id = req.query.id;
    // Defensive: Only try to delete if id is a valid ObjectId
    if (!id || !ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid or missing id" });
    }
    const result = await database.collection("Books").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      console.log("Delete attempted for _id:", id, "- Book not found.");
      res.status(404).json({ error: "Book not found" });
    } else {
      console.log("Deleted book with _id:", id);
      res.json("Deleted successfully!");
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
  }
});
