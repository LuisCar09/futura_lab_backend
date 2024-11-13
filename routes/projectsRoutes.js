import express from 'express';
const router= express.Router()
import Projects from '../models/Projects.js';
import ProjectsControllers from '../controllers/projectsRoutesController.js';

router.get('/',ProjectsControllers.getProjects ),

router.post('/new', ProjectsControllers.createProject),

router.get('/:projectId',ProjectsControllers.getProjectById ),

router.put('/:projectId', ProjectsControllers.updateProjectById),

router.delete('/:projectId', ProjectsControllers.deleteProjectById)

router.get('/title/:name',ProjectsControllers.getProjectByTitle) //esta ruta sera para el buscador de projectos por coincidencia en el nombre del titulo.


export default router