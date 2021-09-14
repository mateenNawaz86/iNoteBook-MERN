const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");

// Route 1: Get all the notes using GET: '/api/notes/fetchAllNotes', Login required
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
  try {
    // fetch all notes with unique ID of user
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.messsage);
    res.status(500).send("Internal error occured!");
  }
});

// Route 2: Add new note using POST: '/api/notes/addNewNote', login required
router.post(
  "/addNewNote",
  fetchUser,
  [
    body("title", "Title atleast 3 characters!").isLength({ min: 3 }),
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

      // Create new Note with unique user ID
      const note = new Notes({
        title,
        description,
        tage,
        user: req.user.id,
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("Internal error occured!");
    }
  }
);

// Route 3: Update an existing note using PUT: '/api/notes/updateNote', login required
router.put(
  "/updateNote/:id",
  fetchUser,
  [
    body("title", "Title atleast 3 characters!").isLength({ min: 3 }),
    body("description", "Description must be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const { title, description, tage } = req.body;
    try {
      // if there are errors return Bad request & error msg
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Create a new Note object
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tage) {
        newNote.tage = tage;
      }

      // find the Note to be updated & update it
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(404).send("NOT FOUND");
      }

      // Check the user authentication
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Sorry NOT allowed");
      }

      // update the selected the Note content
      note = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );

      res.json(note);
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("Internal error occured!");
    }
  }
);

// Route 4:Delete an existing note using DELETE: '/api/notes/deleteNote', login required
router.delete("/deleteNote/:id", fetchUser, async (req, res) => {
  try {
    // find the specific Note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("NOT Found!");
    }

    // check the user authentication
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Sorry NOT allowed!");
    }

    // Delete an existing Note
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Selected Note deleted successfully!" });
  } catch (error) {
    console.error(error.messsage);
    res.status(500).send("Internal error occured!");
  }
});
module.exports = router;
