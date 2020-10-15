import mongoose , {Schema, Document, mongo} from 'mongoose';

export interface ICursos extends Document {

    idCurso: String;
    nombreCurso: String;
    Horario : [];
    isActiveCurso : Boolean;
    
}

const schema : Schema =new Schema({

    idCurso : {
            type: String,
            required :true
    },
    nombreCurso: {
            type:String,
            required:true
    },
    docenteCurso:{
        type:String,
        required:true
    },
    isActiveCurso:{
        type:Boolean,
        required:true,
        default:true
    }

});

export default mongoose.model<ICursos>('Cursos',schema);