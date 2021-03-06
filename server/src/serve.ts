import express from 'express'
import path from 'path'
import routes from './routes'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))

//Rota : Endereço completo da requisição
//Recurso : Qaul entidade estamos acessando do sitema

//GET: Buscar uma ou mais informações do bak-end
//POST: Criar uma nova informação no back-end
//Put: Atualizar uma informação exitente no bak-end
//DELETE: Remover uma informação do back-end

// POST: http://localhost:3333/users


// Request Param: Paramentro que vem na própria rota que identifica um recurso
// Query Param: Paramentros que vem na propria rota, geralmente opcionais para filtrom paginação...
//Request Body: Parametros para criação / atualização de informações

//knex('users').where('name','Charles').select(*)

//const users = ['diego', 'Cletion','Charles','carlos']







app.listen(3333)