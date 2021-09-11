const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// Route 1: Get all notes using: /api/notes/fetchAllNotes => GET method
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.messsage);
    res.status(500).send("Internal error occured!");
  }
});

// Route 2: add a new note using: /api/notes/addNewNote => GET method
router.post(
  "/addNewNote",
  fetchUser,
  [
    body("title", "Please enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tage } = req.body;
      // if there are errors return Bad request & error msg
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // create a new notes here
      const note = new Notes({
        title,
        description,
        tage,
        user: req.user.id,
      });

      // saved a new entered note
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("Internal error occured!");
    }
  }
);

module.exports = router;
