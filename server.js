const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT | 3000; 

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));



app.use("/api", apiRoutes);  
app.use("/", htmlRoutes);    

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
})

