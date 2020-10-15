import CargaAcademica,{ICargaAcademica} from '../models/CargaAcademica.models';

export default class CargaAcademicaRepository{


    async insertCargaAcademica(icargaacademica:ICargaAcademica):Promise<ICargaAcademica>{

        const insertcargaacademica:ICargaAcademica = await CargaAcademica.create(icargaacademica);
        return insertcargaacademica;

    }


}