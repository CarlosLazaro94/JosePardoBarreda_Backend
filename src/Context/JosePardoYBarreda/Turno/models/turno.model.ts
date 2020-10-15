import mongoose , {Schema, Document, mongo} from 'mongoose';

export interface ITurno extends Document {

    idTurno: String;
    nombreTurno: String;
    isActiveTurno : Boolean;
    
}

const schema : Schema =new Schema({

    idTurno : {
            type: String,
            required :true
    },
    nombreTurno: {
            type:String,
            required:true
    },
    isActiveTurno:{
        type:Boolean,
        required:true,
        default:true
    }

});

export default mongoose.model<ITurno>('Turno',schema);7