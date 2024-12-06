import express from 'express';
import authUsersControllers from '../controllers/authUsersControllers.js';
import verifyToken from '../middlewares/authMiddleware.js'
const router= express.Router()

router.get('/',authUsersControllers.getAllUser)
router.get('/members/profile/:id',verifyToken,authUsersControllers.getUser)
router.get('/:uid',verifyToken,authUsersControllers.getUser)
router.get('/username/:username',authUsersControllers.getUserByName)
router.post('/newuser',authUsersControllers.createUser)
router.put('/:id',verifyToken,authUsersControllers.updateUser)
router.delete('/:id',authUsersControllers.deleteUser)

export default router