import mongoose, {Schema, Document} from 'mongoose';

export interface ICargaAcademica extends Document{

    idCargaAcademica : String;
    NombredelCurso : String;
    Docente:String;
    Horario : [];

}

const schema:Schema = new Schema({
    idCargaAcademica:{
        type:String,
        required:true
    },
    NombredelCurso:{
        type:String,
        required:true
    },
    Docente:{
        type:String,
        required:true
    },
    Horario:[   {
                    dia:
                    {
                        type:String,
                        required:true
                    },
                    desde:
                    {
                        type:String,
                        required:true
                    },
                    hasta:
                    {
                        type:String,
                        required:true
                    }
                },
            ]
});

export default mongoose.model<ICargaAcademica>('CargaAcademica',schema);