import express from 'express';
import servicesControllers from '../controllers/servicesControllers.js';
const router= express.Router()
router.get('/',servicesControllers.getServices)
router.post('/new',servicesControllers.createService)
router.get('/:id',servicesControllers.getServiceById)
router.put('/:id',servicesControllers.updateService)
router.delete('/:id',servicesControllers.deleteService)

export default router