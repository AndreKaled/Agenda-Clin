export class DatabaseMemory{
    #people = new Map()

    list(search){
        return Array.from(this.#people.entries()).map((clientArray) => {
            const id = clientArray[0]
            const data = clientArray[1]

            return {
                id,
                ...data
            }
        }).filter(client => {
            if(search){
                return client.id.includes(search)
            }

            return true
        });
    }

    create(person){
        const personID = person.id

        this.#people.set(personID,person)
    }

    update(id, person){
        this.#people.set(id, person)
    }

    delete(id){
        this.#people.delete(id)
    }
}