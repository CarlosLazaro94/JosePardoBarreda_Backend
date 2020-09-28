import mongoose,{ Schema,Document } from "mongoose";

export interface IUbigeo extends Document{
 
   Departamento:String,
   Provincia:String,
   Distrito:String

}

const schema: Schema = new Schema({

        
        Departamento:{
            type: String,
            required:true
        },
        Provincia:{
            type:String,
            required: true
        },
        Distrito:{
            type:String,
            required: true
        }
});

export default mongoose.model<IUbigeo>("Ubigeo",schema)

