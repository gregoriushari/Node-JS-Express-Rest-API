const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parse request of content-type: application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message : "Welcome to my app"});
});

app.listen(3000,()=>{
    console.log("Running in port 3000");
});

require("./app/routes/customer.routes.js")(app);
app.listen();