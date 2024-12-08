import express from 'express';
const router= express.Router()
import Projects from '../models/Projects.js';
import ProjectsControllers from '../controllers/projectsRoutesController.js';
import verifyToken from '../middlewares/authMiddleware.js';

router.get('/',ProjectsControllers.getProjects )
router.get('/user/:uid',ProjectsControllers.getProjectByUid)
router.get('/title/:name',ProjectsControllers.getProjectByTitle) //esta ruta sera para el buscador de projectos por coincidencia en el nombre del titulo.
router.get('/:projectId',ProjectsControllers.getProjectById )

router.post('/new',verifyToken, ProjectsControllers.createProject)


router.put('/:projectId', ProjectsControllers.updateProjectById)

router.delete('/:projectId', ProjectsControllers.deleteProjectById)



export default router