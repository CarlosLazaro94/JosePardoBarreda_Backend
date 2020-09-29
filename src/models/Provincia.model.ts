import mongoose ,{ Schema, Document }from 'mongoose'

export interface IProvincia extends Document{

    id: String,
    name: String,
    department_id: String
}

const schema :Schema = new Schema({

    id:{
        type:String
    },

    name:{
        type:String
    },
    department_id:{
        type:String
    }    



})

export default mongoose.model<IProvincia>("Provincias",schema)