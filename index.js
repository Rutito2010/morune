const express = require("express")
const path = require("path")
const app = express()

app.get("/morune_c497061e.html", (req, res) => {
  res.sendFile(path.join(__dirname, "morune_c497061e.html"));
});
app.listen(8080, ()=> console.log("ok"))
