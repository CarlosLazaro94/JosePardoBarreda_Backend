import mongoose, { Schema, Document } from 'mongoose';

export interface IMadreFamilia extends Document {

    fTipoDocumentomadre: String;
    fnumDocumentomadre: Number;
    fNombresmadre: String;
    fApePaternomadre: String;
    fApeMaternomadre: String;
    fFechaNacmadre: Date;
    //fEstadoCivilmadre: String;
    fEstadoFallecidomadre: Boolean;
    fNivelInsitucionmadre: String;
    fSituacionLaboralmadre: Boolean;
    fOcupacionmadre: String;
    fTelefonomadre: Number;
    fViveconestudiantemadre: Boolean;
    active: boolean;

}

const schema: Schema = new Schema({


    //Madre

    fTipoDocumentomadre: {
        type: String,
        required: true,
    },
    fnumDocumentomadre: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    fNombresmadre: {
        type: String,
        required: true,
    },
    fApePaternomadre: {
        type: String,
        required: true,
    },
    fApeMaternomadre: {
        type: String,
        required: true,
    },
    fFechaNacmadre: {
        type: Date,
        required: true,
    },
    /*fEstadoCivilmadre: {
        type: String,
        required: true,
    },*/
    fEstadoFallecidomadre: {
        type: Boolean,
        required: true,
    },
    fNivelInsitucionmadre: {
        type: String,
        required: true,
    },
    fSituacionLaboralmadre: {
        type: Boolean,
        required: true,
    },
    fOcupacionmadre: {
        type: String,
        required: true,
    },
    fTelefonomadre: {
        type: Number,
        required: true,
    },
    fViveconestudiantemadre: {
        type: Boolean,
        required: true,
    },

    active: {
        type: Boolean,
        defaultsTo: true,
    },

});
