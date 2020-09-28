import mongoose  from 'mongoose'

const initializeDatabase = async () => {

    const startConnection = new Promise(( resolve, reject)=>{
    const url = "mongodb+srv://dbcarlos:LatierraXX2@clusterjpb.a4aft.mongodb.net/JosePardoBarreda_db?retryWrites=true&w=majority"    
        mongoose.connect(url, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            poolSize: 10,
            
            },  
            err => {
                if(err){
                    console.log("an error ocurred in connection to mongoDB")
                    reject(err)
                }else{
                    console.log("connect to mongodb")
                    resolve()
                }
            }


        )
    })

await startConnection;

}


export default initializeDatabase;