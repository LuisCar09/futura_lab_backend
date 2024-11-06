import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
dotenv.config()
import User from './models/User.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send('<h1>Server On</h1>')
})
app.post('/createuser',async(req,res)=>{
    const data = req.body
    try {
        await User.create(data)
        res.status(201).json({success:"User Create Sucessfully"})
    } catch (error) {
        res.status(500).json({message:'Error creating user'})
    }
    
})
app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}/`)
})

dbConnection()