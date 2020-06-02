import express, { request, response } from 'express';


const app = express()
app.use(express.json())

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

const users = ['diego', 'Cletion','Charles','carlos']




app.get('/users', (request,response) =>{
  const search = String(request.query.search)

  const filteredUsers = search ? users.filter(user =>user.includes(search)) : users

  console.log(search)

  //json

  return response.json(filteredUsers)
})

app.get('/users/:id', (request, response)=>{
  const id = Number(request.params.id) 

  const user = users[id]

  return response.json(user)
})


app.post('/users',(request, response)=>{
const data = request.body

const user = {
    name : data.name,
    email: data.email,
}


  return response.json(user);
})


app.listen(3333)