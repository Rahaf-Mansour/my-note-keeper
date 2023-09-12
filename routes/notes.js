const express = require("express");
const router = express.Router();

// Getting all notes
router.get("/", (req, res) => {
  res.send("Test the route");
});

// Getting one note by id
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating a new one
router.post("/", (req, res) => {});

// Updating one note by id
router.patch("/:id", (req, res) => {});

// Deleting one note by id
router.delete("/:id", (req, res) => {});
module.exports = router;
