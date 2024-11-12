import express from 'express';
const router= express.Router()
import Projects from '../models/Projects.js';

router.get('/projects', async(req,res) => {
    try {
        const projects = await Projects.find()
        res.status(200).json(projects)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Error fetching projects'})
        
    }
}),

router.post('/projects/new', async(req,res) => {

    const {  nameProject,description,Composition,Contributors,License,References,Bibliography,application,Ingredients, Properties, AmbientConditions,LigthsConditions, Tools, Processes,PrepTime,image, video } = req.body
    try {
        const newProject = new Projects({
            nameProject,description,Composition,Contributors,License,References,Bibliography,application,Ingredients, Properties, AmbientConditions,LigthsConditions, Tools, Processes,PrepTime,image, video
        })
        const saveProject = await newProject.save()
        res.status(201).json(saveProject)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating project' })
    }

}),

router.get('/projects/:projectId', async(req,res) => {
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
}),

router.put('/projects/:projectId', async(req,res) => {
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
}),

router.delete('/projects/:projectId', async(req,res) => {
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
})

export default router