import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const database = new DatabasePostgres()
const server = fastify()

//CRUD CLIENT
 server.post('/client', async (request, reply) => {
    //Request Body
     const {id, name, query} = request.body

    await database.create({
        id,
        name,
        query
    })

    return reply.status(201).send()
})

server.get('/client', async (request)=> {

    const search = request.query.search

    const clients = await database.list(search)

    return clients
})

server.put('/client/:id', async (request, reply)=> {
    const clientID = request.params.id
    //Request Body
    const {name, query} = request.body

    const person = await database.update(clientID,{
        name,
        query
    })

    return reply.status(204).send()
})

server.delete('/client/:id', async (request, reply) => {
    const clientID = request.params.id
    await database.delete(clientID)

    return reply.status(200).send()
})

server.listen({
    port: process.env.PORT ?? 3333,
})
