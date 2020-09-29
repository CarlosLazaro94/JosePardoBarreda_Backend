import mongoose,{ Schema, Document, mongo } from 'mongoose'

export interface IDistrito extends Document{

    id: String,
    name: String,
    province_id: String,
    department_id: String

}

const schema : Schema = new Schema({

    id:{
        type:String
    },
    name:{
        type:String
    },
    province_id:{
        type:String
    },
    department_id:{
        type:String
    }

})



export default mongoose.model<IDistrito>("Distritos",schema)