
import User from "../models/User.js"
const prueba = {
    "name": "Juan",
    "lastName": "Pérez",
    "image": "https://example.com/image.jpg",
    "email": "juan.perez@example.com",
    "dateBirth": "1990-01-01",
    "address": "123 Calle Principal, Ciudad, País",
    "projects": ["Proyecto A", "Proyecto B"],
    "likes": ["Tecnología", "Deportes"],
    "followers": 10,
    "follows": 5,
    "preferences": "opción1",
    "description": "Soy un apasionado de la tecnología y el desarrollo de software. Me gusta aprender cosas nuevas y trabajar en proyectos interesantes.",
    "offers": ["Oferta A", "Oferta B"]
}
const authUsersControllers = {
    getAllUser: async (req,res) =>{
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            console.error(error.message)
        }
    },
    getUser: async (req,res) =>{
        
       
        
        try {
            const userId = req.params.uid
            
            const findUser = !req.originalUrl.split('/').includes('members') ?  await User.find({uid:req.params.uid})  : await User.find({_id:req.params.id})  
            
            
            // const user = await User.find({uid:userId})
            
            
            res.status(200).json(findUser)
        } catch (error) {
            console.error(error.message)
        }
    },
    getUserByName: async (req,res) =>{
        try {
            const {username} = req.params 
            
            const user = await User.find({
                userName : {$regex:`^${username}` , $options:'i'}
            })      
            
            res.status(200).json(user)
        } catch (error) {
            console.error(error.message)
        }
    },
    getUserEmail: async(req,res) => {
        try {
            const {email} = req.params
            
            
            const user = await User.findOne({email})
            res.status(200).json(user)
        } catch (error) {
            console.error(error.message)
        }
    },

    createUser : async (req,res) => {
        try {
            
            
            const usersDetails = req.body
            const existUserUid = await User.findOne({uid:usersDetails.uid}) 
            if (!existUserUid) {
                const itHasUserImage = !usersDetails.image ? `https://api.dicebear.com/9.x/initials/svg?seed=${usersDetails.name[0]}` : usersDetails.image 
                const userData = {...usersDetails,image:itHasUserImage}
                const userCreated = await User.create(userData) 
                
            
                res.status(201).json({success: 'User created successfully',id:userCreated._id})
            }else{
                res.status(401).json({error: 'User already exists'})
            }
            
        } catch (error) {
            console.log(error.message);
            
        }

    },
    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;

            const user = await User.findByIdAndUpdate(id, body, { new: true });
            
            
             if (!user) {
                 return res.status(404).json({ message: 'User not found' });
            }
    
            res.status(200).json({ message: 'User updated successfully', user });
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred',error });
        }
    },

    deleteUser: async(req,res) => {
        const id = req.params.id
        try {
            const user = await User.findById(id)
            if(!user){
                return res.status(404).json({message: 'user not found'})
            }
            await User.findByIdAndDelete(id)
            res.status(200).json({message: 'User deleted succesfully'})
            
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Error deleting user' })
        }
    }
    
}

export default authUsersControllers