import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
dotenv.config()
import User from './models/User.js'
import projectsRoutes from './routes/projectsRoutes.js'


const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));

dbConnection()

app.use('/', projectsRoutes)

/*app.get('/',(req,res) => {
    res.send('<h1>Server On</h1>')
})
app.get('/createuser', async(req,res)=>{
    res.send('<h1>create user</h1>')
})

app.post('/createuser',async(req,res)=>{
    const data = req.body
    try {
        await User.create(data)
        res.status(201).json({success:"User Create Sucessfully"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Error creating user'})
    }
    
})*/


/*projects Routes */


app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}/`)
})

