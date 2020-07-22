import express from 'express'
import PointsController from './controller/PointsController'
import ItemsController from './controller/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/', (request,response) =>{
    return response.json({ message: "Bem vindo in my apliction"})
  })

routes.get('/items',itemsController.index)
routes.post('/points',pointsController.create)
routes.get('/points',pointsController.index)
routes.get('/points/:id',pointsController.show)

  



  export default routes
  