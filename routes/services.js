import express from 'express';
import servicesControllers from '../controllers/servicesControllers.js';
import verifyToken from '../middlewares/authMiddleware.js'
const router= express.Router()
router.get('/',servicesControllers.getServices)
router.post('/new',verifyToken,servicesControllers.createService)
router.get('/:id',verifyToken,servicesControllers.getServiceById)
router.put('/:id',servicesControllers.updateService)
router.delete('/:id',servicesControllers.deleteService)

export default router