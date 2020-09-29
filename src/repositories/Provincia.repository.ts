//import { IProvincia, Provincias } from '../models';
import Provincias, {IProvincia} from '../models/Provincia.model'
export default class ProvinciaRepository {
  async insertProvincia(provincias: IProvincia) {
    const provinciasCreated = await Provincias.create(provincias);

    return provinciasCreated;
  }

  async getProvincias() {
    const getprovincias = await Provincias.find();

    return getprovincias;
  }

  async getProvinciasById(department_id: String){
    const getprovinciabyid = await Provincias.find({department_id});
    return getprovinciabyid;
  }
}
