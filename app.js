import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
import cors from 'cors'
import projectsRoutes from './routes/projectsRoutes.js'
import authUser from './routes/authUser.js'
import services from './routes/services.js'
import paymentRoutes from './routes/paymentRoutes.js'
import serviceAccount from './config/firebase.js'
import admin from "firebase-admin"
const app = express()
const PORT = process.env.PORT
dotenv.config()



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.use('/projects', projectsRoutes)
app.use('/users',authUser)
app.use('/services',services)
app.use('/buy',paymentRoutes)
app.use((req,res)=>{
    res.status(404).json({message:'End point does not exist'})
})


dbConnection()
app.listen(PORT,()=> {
    console.log(`Server listening on http://localhost:${PORT}/`)
})

