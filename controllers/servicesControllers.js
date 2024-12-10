import Services from "../models/Services.js"
const ServicesControllers = {
    getServices: async (req, res) => {
        try {
            const services = await Services.find();
            res.status(200).json(services);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching services', error: error.message });
        }
    },
    createService: async (req, res) => {
        const { name, email, username,description, duration, price, location,uid,image,stock,date,hour } = req.body;
       
        if (!name || !email || !duration || !price || !location || !username ||!description || !uid || !image || !stock || !date || !hour) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        
        try {
            const newService = new Services({ name, email, username, description, duration, price, location,uid,image,stock,date,hour });
            await newService.save();
            res.status(201).json(newService);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating service', error: error.message });
        }
    },
    getServiceById: async (req, res) => {
        
        
        try {
            const service = await Services.findById(req.params.id);
            if (!service) return res.status(404).json({ message: 'Service not found' });
            res.status(200).json(service);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching service', error: error.message });
        }
    },
    updateService: async (req, res) => {
        try {
            const id = req.body.id;
            const body = req.body;
            const service = await Services.findByIdAndUpdate(id, body, { new: true });
            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }
            res.status(200).json({ message: 'Service updated successfully', service });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred', error: error.message });
        }
    },
    deleteService: async (req, res) => {
        try {
            const service = await Services.findById(req.params.id);
            if (!service) return res.status(404).json({ message: 'Service not found' });
            await Services.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Service deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting service', error: error.message });
        }
    },
    getServiceByUid : async(req,res) => {
        
        
        
        try {
            const uid = req.params.uid
            
            
            const service = await Services.find({uid})
           
            
             
            if(!service)
                return res.status(404).json({message: 'Project not found'})
            
            
            res.status(200).json(service)
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching project' })
        }
    }
};
export default ServicesControllers;