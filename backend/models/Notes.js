const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tage: {
    type: String,
    default: "General",
  },
  password: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
