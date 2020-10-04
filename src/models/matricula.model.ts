import mongoose, { Schema, Document } from 'mongoose';

export interface IMatricula extends Document {
  codMatricula: String;
  aTipoDocumento: String;
  anumDocumento: number;
  aNombres: String;
  aApePaterno: String;
  aApeMaterno: String;
  aSexo: String;
  aFechaNac: Date;
  aDepartamentoNac: String;
  aProvinciaNac: String;
  aDistritoNac: String;
  aDepartamentoDom: String;
  aProvinciaDom: String;
  aDistritoDom: String;
  aDireccionDom: String;
  aReligion: String;
  aNumHermanos: Number;
  aLugarOcupHermanos: Number;
  aTrabaja: boolean;
  //aOcupacion: String;
  aDiscapacidad: String;

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
  fViveconestudiantepadre:Boolean;
  //Madre

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
  fViveconestudiantemadre:Boolean;
  active: boolean;
}

const schema: Schema = new Schema({
  codMatricula: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  aTipoDocumento: {
    type: String,
    required: true,
  },
  anumDocumento: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  aNombres: {
    type: String,
    required: true,
  },
  aApePaterno: {
    type: String,
    required: true,
  },
  aApeMaterno: {
    type: String,
    required: true,
  },
  aSexo: {
    type: String,
    required: true,
  },
  aFechaNac: {
    type: Date,
    required: true,
  },
  aDepartamentoNac: {
    type: String,
    required: true,
  },
  aProvinciaNac: {
    type: String,
    required: true,
  },
  aDistritoNac: {
    type: String,
    required: true,
  },
  aDepartamentoDom: {
    type: String,
    required: true,
  },
  aProvinciaDom: {
    type: String,
    required: true,
  },
  aDistritoDom: {
    type: String,
    required: true,
  },
  aDireccionDom: {
    type: String,
    required: true,
  },
  aReligion: {
    type: String,
    required: true,
  },
  aNumHermanos: {
    type: Number,
    required: true,
  },

  aLugarOcupHermanos: {
    type: Number,
    required: true,
  },

  aTrabaja: {
    type: Boolean,
    required: true,
  },
  /*aOcupacion: {
    type: String,
    required: true,
  },*/
  aDiscapacidad: {
    type: String,
    required: true,
  },

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
  /*fEstadoCivilpadre: {
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
  fViveconestudiantepadre:{
    type: Boolean,
    required: true,
  },

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
  fViveconestudiantemadre:{
    type: Boolean,
    required: true,
  },

  active: {
    type: Boolean,
    defaultsTo: true,
  },
});

export default mongoose.model<IMatricula>('Matricula', schema);
