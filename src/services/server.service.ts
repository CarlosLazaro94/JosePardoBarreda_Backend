import http from 'http'
import app from '../app'

const initializeServer = async () => {

    const startServer = new Promise((resolve, reject)=>{
        const server: http.Server = http.createServer(app)
        server.listen(3000)
            .on("listening",() =>{
                console.log('server is running on port 3000')
                resolve()
            })
            .on("error", err =>{
                console.log("an error ocurred in server")
                reject(err)
            })
    })

    await startServer

}

export default initializeServer