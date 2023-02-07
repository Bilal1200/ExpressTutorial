const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT , (error) =>{
    if (!error)
    console.log("server is successfully listening and app is on port " + PORT)
    else
    console.log("error accoured , server  can't start " , error)
})