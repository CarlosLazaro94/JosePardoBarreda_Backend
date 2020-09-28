import mongoose,{ Schema,Document } from "mongoose";

export interface IUsuario extends Document{

    usuario: String,
    password: String,
    DateCreate:Date,
    DateModified: Date,
    active: boolean


}

const schema: Schema = new Schema({

        usuario: {
            type: String,
            required: true
        },
        password:{
            type: String,
            required:true
        },
        DateCreate:{
            type:Date,
            required: true
        },
        DateModified :{
            type: Date,
            default: Date.now(),
            required:true
            
        },
        active: {
            type: String,
            required: true
        }

});

export default mongoose.model<IUsuario>("Usuario",schema)