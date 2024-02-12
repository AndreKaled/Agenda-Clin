import { sql } from "./db.js"

export class DatabasePostgres{    

    async list(search){
        let clients

        if(search){
            clients = await sql`SELECT * FROM Cliente WHERE id = ${search}`
        } else {
            return "Nenhum cliente com este CPF foi encontrado!"
        }

        return clients
    }

    async create(person){
        
        await sql`INSERT INTO Cliente (id, nome, motivo_consulta) VALUES (${person.id}, ${person.name}, ${person.query})`
    }

    async update(id, person){
        await sql `UPDATE Cliente SET nome = ${person.name}, motivo_consulta = ${person.query} WHERE id = ${id}`
    }

    async delete(id){
        await sql `DELETE FROM Cliente 
        WHERE id = ${id}`
    }
}