const router = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const store = require("../js/store");
const path = require("path");


router.get("/notes", function(request, response) {
  response.send(db);
});

// other apis here

router.post("/notes", function(request, response){
  db.push(store(request.body));
  response.json(true)
  let data = JSON.stringify(db);
  writeToDB();
})
// /api/notes/:id

router.delete("/notes/:id", function(request, response){
  let tempNote = request.params.id;
  db = db.filter(item => item.id != tempNote);
  response.json(true);
  writeToDB();
});

function writeToDB(){
  let data = JSON.stringify(db)
  fs.writeFile(path.join(__dirname, "../db/db.json"), data, err => {if(err) throw err});

}

module.exports = router;