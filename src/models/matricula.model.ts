import mongoose, { Schema, Document } from 'mongoose'


export interface IMatricula extends Document {
        codMatricula: String,
        aTipoDocumento:string,
        anumDocumento:Number,
        aNombres : string,
        aApePaterno: String,
        aApeMaterno :String,
        aSexo:String,
        aFechaNac:Date,
        aDepartamentoNac:String,
        aProvinciaNac:String,
        aDistritoNac:String,
        aDepartamentoDom:String,
        aProvinciaDom:String,
        aDistritoDom:String,
        aDireccionDom:String,
        aReligion:String,
        aNumHermanos:Number,
        aLugarOcupHermanos:number,
        aTrabaja:Boolean,
        aOcupacion:String,
        aDiscapacidad:String,
        fTipoDocumento:String,
        fnumDocumento:number,    
        fNombres:String, 
        fApePaterno:String,
        fApeMaterno:String,
        fFechaNac:Date,
        fDepartamentoNac:String,
        fProvinciaNac:String,
        fDistritoNac:String,
        fDepartamentoDom:String,
        fProvinciaDom:String,
        fDistritoDom:String,
        fEstadoCivil:String,
        fEstadoFallecido:Boolean,
        fNivelInsitucion:String,
        fSituacionLaboral:boolean,
        fTelefono:number,
        active: Boolean
}

const schema: Schema = new Schema({

        codMatricula: {
                type: String,
                required: true
        },
        aTipoDocumento:{
                type:String,
                required: true
        },
        anumDocumento:{
                type:Number,
                required: true
        },
        aNombres:{
                type:String,
                required: true
        },
        aApePaterno:{
                type:String,
                required: true
        },  
        aApeMaterno:{
                type:String,
                required: true
        },
        aSexo:{
                type:String,
                required: true
        },
        aFechaNac:{
                type:Date,
                required: true
        },
        aDepartamentoNac:{
                type:String,
                required: true
        },
        aProvinciaNac:{
                type:String,
                required: true
        },
        aDistritoNac:{
                type:String,
                required: true
        },
        aDepartamentoDom:{
                type:String,
                required: true
        },
        aProvinciaDom:{
                type:String,
                required: true
        },
        aDistritoDom:{
                type:String,
                required: true
        },
        aDireccionDom:{
                type:String,
                required:true
        },
        aReligion:{
                type:String,
                required: true
        },
        aNumHermanos:{
                type:Number,
                required: true
        },

        aLugarOcupHermanos:{
                type:Number,
                required: true
        },

        aTrabaja:{
                type:Boolean,
                required: true
        },
        aOcupacion:{
                type:String,
                required:true
        },
        aDiscapacidad:{
                type:String,
                required: true
        },
        //PadreFamilia
        fTipoDocumento:{
        type:String,
        required: true
        },
        fnumDocumento:{
                type:Number,
                required: true
        },
        fNombres:{
                type:String,
                required: true
        },
        fApePaterno:{
                type:String,
                required: true
        },  
        fApeMaterno:{
                type:String,
                required: true
        },
        fFechaNac:{
                type:Date,
                required: true
        },
        fDepartamentoNac:{
                type:String,
                required: true
        },
        fProvinciaNac:{
                type:String,
                required: true
        },
        fDistritoNac:{
                type:String,
                required: true
        },
        fDepartamentoDom:{
                type:String,
                required: true
        },
        fProvinciaDom:{
                type:String,
                required: true
        },
        fDistritoDom:{
                type:String,
                required: true
        },
        fEstadoCivil:{
                type:String,
                required:true
        },
        fEstadoFallecido:{
                type:Boolean,
                required: true
        },
        fNivelInsitucion:{
                type:String,
                required:true
        },
        fSituacionLaboral:{
                type:Boolean,
                required:true
        },
        fTelefono:{
                type:Number,
                required:true
        },
        active: {
            type: Boolean,
            defaultsTo: true
        }

})

export default mongoose.model<IMatricula>("Matricula", schema)

