import express from 'express';
const router= express.Router()
import PaymentController from '../controllers/paymentControllers.js'

//import verifyToken from '../middlewares/authMiddleware.js';

router.post('/new', PaymentController.createSale)

export default router