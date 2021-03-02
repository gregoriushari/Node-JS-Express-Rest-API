const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parse request of content-type: application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message : "Welcome to my app"});
});

require("./app/routes/customer.routes.js")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


