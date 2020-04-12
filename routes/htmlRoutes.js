const path = require("path");
const router = require("express").Router();

router.get("/notes", function(request, response) {
    // send  notes file

    // console.log(path.join(__dirname, "../public/notes.html"));
    response.sendFile(path.join(__dirname, "../public/notes.html"));
    // 15-HotRestaurant/Solved for more info
});

router.get("*", function (request, response){
    response.sendFile(path.join(__dirname, "../public/index.html"));
})



module.exports = router;