import mongoose, { Schema, Document } from 'mongoose';

export interface IMatricula extends Document {
  codMatricula: string;
  aTipoDocumento: string;
  anumDocumento: number;
  aNombres: string;
  aApePaterno: string;
  aApeMaterno: string;
  aSexo: string;
  aFechaNac: Date;
  aDepartamentoNac: string;
  aProvinciaNac: string;
  aDistritoNac: string;
  aDepartamentoDom: string;
  aProvinciaDom: string;
  aDistritoDom: string;
  aDireccionDom: string;
  aReligion: string;
  aNumHermanos: number;
  aLugarOcupHermanos: number;
  aTrabaja: boolean;
  aOcupacion: string;
  aDiscapacidad: string;
  fTipoDocumento: string;
  fnumDocumento: number;
  fNombres: string;
  fApePaterno: string;
  fApeMaterno: string;
  fFechaNac: Date;
  fDepartamentoNac: string;
  fProvinciaNac: string;
  fDistritoNac: string;
  fDepartamentoDom: string;
  fProvinciaDom: string;
  fDistritoDom: string;
  fEstadoCivil: string;
  fEstadoFallecido: boolean;
  fNivelInsitucion: string;
  fSituacionLaboral: boolean;
  fTelefono: number;
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
  aOcupacion: {
    type: String,
    required: true,
  },
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
  fEstadoCivilpadre: {
    type: String,
    required: true,
  },
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
  fTelefonopadre: {
    type: Number,
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
  fEstadoCivilmadre: {
    type: String,
    required: true,
  },
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
  fTelefonomadre: {
    type: Number,
    required: true,
  },

  active: {
    type: Boolean,
    defaultsTo: true,
  },
});

export default mongoose.model<IMatricula>('Matricula', schema);
