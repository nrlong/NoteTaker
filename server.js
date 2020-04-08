const express = require("express");
const app = express();

const PORT = process.env.PORT | 3000; 

// basic server template
// see 14-FinalStarwarsApp/server-template.js
// plus require routes 
app.use(express.urlencoded({extended : true}));
app.use(express.json());
// PLUS the following 
app.use(express.static("public"));
/* 
^^ creates a path to static front-end files: html, css & js.
notice how files are referenced in index.html: 
                       <script src="/js/index.js"></script>. 
this is because we have created a static path that routes
to the /public directory automatically.
*/
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use("/api", apiRoutes);  // /api/notes
app.use("/", htmlRoutes);    // /notes or /

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
})

