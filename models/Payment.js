import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    uidOwner: {
        type:String,
        required:true
    },
    uidBuyer: {
        type:String,
        required:true
    },
    methodPayment: {
        type:String,
        required:true

    },
    price: {
        type:String,
        required:true
    },
    services: {
        type:[String],
        required:true
    }


}, {timestamps:true})

const Payment = mongoose.model('PaymentDB',PaymentSchema)

export default Payment