const express = require('express');
const app = express();
const PORT = 3000;

app.get("/" ,( req,res) => {
res.status(200);
res.send("Wellcome to rool level of server")
})

app.get("/hello" , (req,res) => {
    res.set('Content-Type', 'text/html')
 res.status(200).send("Hello, world!")

})

app.listen(PORT , (error) =>{
    if (!error)
    console.log("server is successfully listening and app is on port " + PORT)
    else
    console.log("error accoured , server  can't start " , error)
})