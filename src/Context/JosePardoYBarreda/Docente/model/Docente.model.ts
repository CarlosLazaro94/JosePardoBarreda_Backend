import mongoose , {Schema, Document, mongo} from 'mongoose';

export interface IDocente extends Document {
    
    idDocente: String;
    nombre :String;
    apePat: String;
    apeMat: String;
    materia : String;
    isActive: Boolean;
    
}

const schema : Schema =new Schema({

    idDocente : {
            type: String,
            required :true
    },
    nombre: {
        type:String,
        required:true
    },
    apePat: {
            type:String,
            required:true
    },
    apeMat:{
        type:String,
        required:true
    },
    materia:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    }

});

export default mongoose.model<IDocente>('Docente',schema);