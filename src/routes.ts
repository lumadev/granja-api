import { Router } from 'express'
import AnimalController from './controller/AnimalController'

const routes = Router()

routes.get('/animal', AnimalController.list)

export default routes