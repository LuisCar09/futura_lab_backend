import express from 'express';
import authUsersControllers from '../controllers/authUsersControllers.js';
const router= express.Router()

router.get('/',authUsersControllers.getAllUser)
router.get('/:id',authUsersControllers.getUser)
router.post('/newuser',authUsersControllers.createUser)

export default router