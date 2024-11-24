import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    image : {
        type : String,
        required : true,
        validate:{
            validator: function(v) {
                const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i 
                const imagenPatternTwo = /^https:\/\/api\.dicebear\.com\/9\.x\/initials\/svg\?seed=[a-zA-Z0-9-_]+$/;
                return imagePattern.test(v) || imagenPatternTwo.test(v)
            },
            message:'Image must be a URL valid or a format ,.png, .jpeg, .jpg, .gif, .webp'
        }
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    dateBirth:{
        type:String,
        required :true,
        trim:true,
        validate:{
            validator: (v) => {
                const regrexBird = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
                return regrexBird.test(v)
            },
            message: 'Date format equal to YYYY-MM-DD'
        }
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    projects:{
        type:[String],
        required:true,
        trim:true,
        timestamp: { type: Date, default: Date.now }
    },
    likes:{
        type:[String],
        required:true,
        trim:true
    },
    followers:{
        type:Number,
        trim:true,
        min:[0,'Cannot be less than zero'],
        default:0
    },
    follows:{
        type:Number,
        min:[0,'Cannot be less than zero'],
        default:0,
        trim:true
    },
    preferences:{
        type:[String],
        trim:true
    },
    description:{
        type:String,
        required:true,
        validated:{
            validator: (v) =>{
                return v.length >=15 && v.length <= 300
            },
            message: 'Description must have betwwen 15 and 300 characteres'
        }
    },
    offers:{
        type:[String],
        required:true
    }


},{timestamps:true})

const User = mongoose.model('UserDB',UserSchema)

export default User