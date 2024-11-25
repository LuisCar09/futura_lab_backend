import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
import cors from 'cors'
dotenv.config()
import projectsRoutes from './routes/projectsRoutes.js'
import authUser from './routes/authUser.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
dbConnection()

app.use('/projects', projectsRoutes)
app.use('/users',authUser)
app.use((req,res)=>{
    res.status(404).json({message:'End point does not exist'})
})


app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}/`)
})

