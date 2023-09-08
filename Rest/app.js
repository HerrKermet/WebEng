const express = require("express");
const fs = require('fs');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
   var list = JSON.parse(fs.readFileSync("./spielfilme.json"));
    console.log(list);
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
