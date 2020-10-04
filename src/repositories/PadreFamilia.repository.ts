import PadreFamilia, { IPadreFamilia } from '../models/PadreFamilia.model';

export default class PadreFamiliaRepository{


    async inserPadre(padre:IPadreFamilia):Promise<IPadreFamilia>{

        const inserpadre:IPadreFamilia = await PadreFamilia.create(padre);

        return inserpadre;

    }


}