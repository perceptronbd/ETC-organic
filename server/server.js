const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');

const app = express()

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
    // This line has been corrected to use the `json()` method
    res.json({ message: 'Hey, world!' });
  });

//connect to db and start server 

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () =>{
                console.log(`Server running on port ${PORT}`)
            })
        })

        .catch((err) => console.log(err))
