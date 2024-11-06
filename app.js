import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
dotenv.config()
import User from './models/User.js'

const app = express()
const PORT = process.env.PORT

app.get('/',(req,res) => {
    res.send('<h1>Server On</h1>')
})
app.post('/createUser',(req,res)=>{
    const data = req.body
    console.log(data);
    res.status(201).json({success:"User Create Sucessfully"})
    
})
app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}/`)
})

dbConnection()