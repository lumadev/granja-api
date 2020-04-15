import { Router } from 'express'
import AnimalController from './controller/AnimalController'

const routes = Router()

routes.get('/animal', AnimalController.list)

routes.get('/animal/:id', AnimalController.get)

routes.post('/animal', AnimalController.create)

routes.put('/animal/:id', AnimalController.edit)

routes.delete('/animal/:id', AnimalController.delete)

export default routes