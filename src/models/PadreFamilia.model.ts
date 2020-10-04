import mongoose, { Schema, Document, mongo } from 'mongoose';

export interface IPadreFamilia extends Document {

    //Padre

    fTipoDocumentopadre: String;
    fnumDocumentopadre: Number;
    fNombrespadre: String;
    fApePaternopadre: String;
    fApeMaternopadre: String;
    fFechaNacpadre: Date;
    //fEstadoCivilpadre: String;
    fEstadoFallecidopadre: Boolean;
    fNivelInsitucionpadre: String;
    fSituacionLaboralpadre: Boolean;
    fOcupacionpadre: String;
    fTelefonopadre: Number;
    fViveconestudiantepadre: Boolean;
    active: boolean;

}

const schema: Schema = new Schema({

    //Padre

    fTipoDocumentopadre: {
        type: String,
        required: true,
    },
    fnumDocumentopadre: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    fNombrespadre: {
        type: String,
        required: true,
    },
    fApePaternopadre: {
        type: String,
        required: true,
    },
    fApeMaternopadre: {
        type: String,
        required: true,
    },
    fFechaNacpadre: {
        type: Date,
        required: true,
    },
   /* fEstadoCivilpadre: {
        type: String,
        required: true,
    },*/
    fEstadoFallecidopadre: {
        type: Boolean,
        required: true,
    },
    fNivelInsitucionpadre: {
        type: String,
        required: true,
    },
    fSituacionLaboralpadre: {
        type: Boolean,
        required: true,
    },
    fOcupacionpadre: {
        type: String,
        required: true,
    },
    fTelefonopadre: {
        type: Number,
        required: true,
    },
    fViveconestudiantepadre: {
        type: Boolean,
        required: true,
    },
    active: {
        type: Boolean,
        defaultsTo: true,
    },

})


export default mongoose.model<IPadreFamilia>("PadreFamilia",schema);