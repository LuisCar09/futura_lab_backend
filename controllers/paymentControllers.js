import Payment from '../models/Payment.js'

const PaymentController = {
    createSale: async(req,res) => {
        const {uidOwner, uidBuyer, methodPayment,price, services} = req.body

        try {
            const newSale= new Payment(
                {uidOwner, uidBuyer, methodPayment,price, services}
            )
            const savePayment= await newSale.save()
            res.status(201).json(savePayment)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating sale' })
        }
    }
}
       
export default PaymentController
