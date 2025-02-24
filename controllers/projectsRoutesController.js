
import Projects from "../models/Projects.js"
const ProjectsControllers = {

    getProjects: async (req, res) => {
        try {
            const projects = await Projects.find()
            res.status(200).json(projects)

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Error fetching projects' })

        }
    },
    createProject: async (req, res) => {

        const { nameproject, owner, description, license, references, bibliography, application, ingredients, properties, ambientconditions, lightsconditions, tools, processes, preptime, image, uid, method } = req.body;



        try {
            const newProject = new Projects(
                { nameproject, owner, description, license, references, bibliography, application, ingredients, properties, ambientconditions, lightsconditions, tools, processes, preptime, image, uid, method }
            )


            const saveProject = await newProject.save()
            res.status(201).json(saveProject)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating project' })
        }

    },
    getProjectById : async(req,res) => {
        
        
        try {
            
            const id = req.params.projectId
            
            const project = await Projects.findById(id)
            if(!project)
                return res.status(404).json({message: 'Project not found'})
            
            
            res.status(200).json(project)
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching project' })
        }
    },
    updateProjectById : async(req,res) => {
        try {
            const id = req.params.projectId
            const body = req.body  
    
            const project = await Projects.findByIdAndUpdate(id, body, {new: true})
            if(!project){
                return res.status(404).json({message: 'Project not found'})
            }
            res.json({success: true})
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching project' })
        }
    },
    deleteProjectById: async(req,res) => {
        const id = req.params.projectId
        
        
        try {
            const project = await Projects.findByIdAndDelete(id)
            if(!project) {
                return res.status(404).json({message: 'Project not found'})
            }
         
            res.status(200).json({success: 'Product deleted successfully'})
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting project' })
        }
    },
    getProjectByTitle: async(req,res) => {
        const projectTitle = req.params.name
       
        
        
        try {
            // const results = await Projects.find({name:{$regex:"printer", $options:'i'}})
           
            
            const results = await Projects.find({ nameproject: { $regex: projectTitle, $options: "i" } })

           res.status(200).json(results)
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching project' })
        }
        res.send('LUISKITO')
    },
    getProjectByUid : async(req,res) => {

        try {
            const {uid} = req.params
            
            const project = await Projects.find({uid})
             
             
            if(!project)
                return res.status(404).json({message: 'Project not found'})
            
            
            res.status(200).json(project)
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching project' })
        }
    }

}

export default ProjectsControllers