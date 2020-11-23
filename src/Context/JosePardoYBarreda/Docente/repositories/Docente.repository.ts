import Docente, { IDocente } from '../model/Docente.model'

export default class DocenteRepository {
  //insertar Docente
  async insertDocente(idDocente: IDocente): Promise<IDocente> {

    const DocenteCreated: IDocente = await Docente.create(idDocente);

    return DocenteCreated;

  }
  //traer todo los Docentes
  async getDocenteAll(): Promise<IDocente[]> {

    const getDocenteall: IDocente[] = await Docente.find();

    return getDocenteall;

  }
  //traer Docente por id
  async getDocenteById(_id: String): Promise<IDocente> {

    const getDocentebyid: IDocente = await Docente.findOne(_id);

    return getDocentebyid;

  }
  //actualizar Docente
  async updateDocente(_id: String, idDocente: IDocente): Promise<IDocente> {

    const updateDocente: any = await Docente.findById(_id);
    const DocenteJSON: any = Object.assign({}, idDocente);
    for (let el in DocenteJSON) {
      updateDocente[el] = DocenteJSON[el];
    }

    await updateDocente.save();

    return updateDocente;

  }
}
