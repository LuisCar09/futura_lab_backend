
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
    },getUser: async (req,res) =>{
        try {
            const userId = req.params.id
            const user = await User.findById(userId)
            res.status(200).json(user)
        } catch (error) {
            console.error(error.message)
        }
    },
    getUserByName: async (req,res) =>{
        try {
            const {username} = req.params        
            const user = await User.findOne({userName:username.toLowerCase()})
            res.status(200).json(user)
        } catch (error) {
            console.error(error.message)
        }
    },
    createUser : async (req,res) => {
        try {
            const usersDetails = req.body
            const itHasUserImage = !usersDetails.image ? `https://api.dicebear.com/9.x/initials/svg?seed=${usersDetails.name[0]}` : usersDetails.image 
            const userData = {...usersDetails,image:itHasUserImage}
            const userCreated = await User.create(userData) 
            console.log(userCreated._id);
            
            res.status(201).json({success: 'User created successfully',id:userCreated._id})
        } catch (error) {
            console.log(error.message);
            
        }

    },
    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            
            
            const user = await User.findByIdAndUpdate(id, body, { new: true });
            console.log(user);
            
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