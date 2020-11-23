import Cursos, { ICursos } from '../models/Curso.model'

export default class CursosRepository {
  //insertar Cursos
  async insertCursos(idCursos: ICursos): Promise<ICursos> {

    const CursosCreated: ICursos = await Cursos.create(idCursos);

    return CursosCreated;

  }
  //traer todo los Cursoss
  async getCursosAll(): Promise<ICursos[]> {

    const getCursosall: ICursos[] = await Cursos.find();

    return getCursosall;

  }
  //traer Cursos por id
  async getCursosById(_id: String): Promise<ICursos> {

    const getCursosbyid: ICursos = await Cursos.findOne(_id);

    return getCursosbyid;

  }
  //actualizar Cursos
  async updateCursos(_id: String, idCursos: ICursos): Promise<ICursos> {

    const updateCursos: any = await Cursos.findById(_id);
    const CursosJSON: any = Object.assign({}, idCursos);
    for (let el in CursosJSON) {
      updateCursos[el] = CursosJSON[el];
    }

    await updateCursos.save();

    return updateCursos;

  }
}
