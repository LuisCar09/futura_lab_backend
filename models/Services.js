import mongoose from "mongoose";
const ServicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
      },
    username: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    duration: {
        type: String,
        required: true,
      },
    price: {
        type: String,
        required: true,
      },
    location: {
        type: String,
        required: true,
      },
    uid:{
      type:String,
      required: true
    }
},{timestamps:true})
const Services = mongoose.model('ServicesDB',ServicesSchema)

export default Services