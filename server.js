const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "views")));

app.get("/*resource*/", function (req, res) {});

app.get("/*page", async (req, res) => {
  res.sendFile(path.join(__dirname, "views/404.html"));
});

const port = process.env.PORT || 14962;

app.listen(port);

console.log(`Server running: http://localhost:${port}`);
