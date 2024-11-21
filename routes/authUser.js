import express from 'express';
import authUsersControllers from '../controllers/authUsersControllers.js';
const router= express.Router()

router.post('/newuser',authUsersControllers.createUser)

export default router