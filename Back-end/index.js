const connectToMongo = require("./dataBase");
const express = require("express");
connectToMongo();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/authent", require("./routes/authent"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
