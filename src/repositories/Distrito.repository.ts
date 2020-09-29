import { IDistrito, Distritos } from '../models';

export default class DistritoRepository {
  async insertDistritos(distritos: IDistrito) {
    const distritoCreated = await Distritos.create(distritos);

    return distritoCreated;
  }

  async getDistritos() {
    const getdistrito = await Distritos.find();

    return getdistrito;
  }

  async getDistritosById(province_id: string) {
    const getdistritobyid = await Distritos.find({ province_id });
    return getdistritobyid;
  }
}
