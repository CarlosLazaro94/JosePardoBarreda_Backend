import Distritos ,{IDistrito} from '../models/Distrito.model'

export default class DistritoRepository {
  //insertar distritos
  async insertDistritos(distritos: IDistrito) {
    const distritoCreated = await Distritos.create(distritos);

    return distritoCreated;
  }
  //selections all districts
  async getDistritos() {
    const getdistrito = await Distritos.find();

    return getdistrito;
  }
  //seleccionar distrito por Id privincia
  async getDistritosById(province_id: string) {
    const getdistritobyid = await Distritos.find({ province_id });
    return getdistritobyid;
  }
}
