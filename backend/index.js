const connectToMongo = require("./dataBase");
const express = require("express");
connectToMongo();

const app = express();
const port = 5000;

// middleware for handling upcoming requests
app.use(express.json());

app.use("/api/authent", require("./routes/authent"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook by Mirani listening at http://localhost:${port}`);
});
