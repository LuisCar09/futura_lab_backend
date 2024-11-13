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

app.use('/projects', projectsRoutes)




app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}/`)
})

