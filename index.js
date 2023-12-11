const express = require('express');
const app = express()
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());



app.get('/', (req, res)=>{
    res.send('Hello from StayVista Server..')
})

app.listen(port, ()=>{
    console.log(`StayVista server is running on port: ${port}`)
})