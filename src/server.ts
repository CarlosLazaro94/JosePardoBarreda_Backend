import initializeServer from './services/server.service'
import initializeDatabase from './services/database.service'

const start = async () => {
    try{
        await initializeServer()
        await initializeDatabase()
    } catch (error){
        console.log("error encontrado : "+ error)
    }
}

start()

