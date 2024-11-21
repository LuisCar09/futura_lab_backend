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

    }
}

export default authUsersControllers