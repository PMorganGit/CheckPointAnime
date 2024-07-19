const express = require("express");
const router = express.Router();
const { browse, read, add } = require("../../../controllers/globalActions");

// Route to get a list of global items
router.get("/", browse);

// Route to get a specific global item by ID
router.get("/:id", read);

// Route to add a new global item
router.post("/", add);

module.exports = router;
