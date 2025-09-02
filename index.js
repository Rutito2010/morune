const express = require("express")
const path = require("path")
const app = express()

app.get("/moune_55246d10.html", (req, res) => {
  res.sendFile(path.join(__dirname, "morune_97a41de3.html"));
});
app.listen(8080, ()=> console.log("ok"))
