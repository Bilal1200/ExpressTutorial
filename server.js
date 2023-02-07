const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

// post api to send data to server

app.post('/checkpost' , (req,res)=>{
    const {name} = req.body;
    res.send(`Wellcome ${name}`);
})
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'image.jpg')))
// get data at root level

app.get("/" ,( req,res) => {
res.status(200);
res.send("Wellcome to rool level of server")
})

// getting data on diffrent route

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