import mongoose , {Schema, Document, mongo} from 'mongoose';

export interface IHorario extends Document {
    
    idHorario: String;
    nivel :String;
    turno: String;
    grado: String;
    seccion : String;
    desHorario: [];
    isActive:Boolean;
    
}

const schema : Schema =new Schema({

    idHorario : {
            type: String,
            required :true
    },
    nivel: {
        type:String,
        required:true
    },
    turno: {
            type:String,
            required:true
    },
    grado:{
        type:String,
        required:true
    },
    seccion:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    }

});

export default mongoose.model<IHorario>('Horario',schema);