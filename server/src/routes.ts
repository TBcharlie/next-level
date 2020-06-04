import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/', (request,response) =>{
    return response.json({ message: "Bem vindo in my apliction"})
  })

routes.get('/items', async (request,response) =>{
  const items = await knex('items').select('*')

  const serializedItems = items.map(item =>{
    return {
      title : item.title,
      image_url : `http://https://next-level-2.charlespierre.repl.co/uploads/${item.image}`
    }
  })


  return response.json(serializedItems)
})

routes.post('/points', async(request,response)=>{
  const {name,email,whatsapp,latitude,longitude,city,uf,items} = request.body;

  await knex('points').insert({
    image:'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  })

  return response.json({success:true})

})

  



  export default routes
  