//import { IMatricula, Matricula } from '../models';
import Matricula, {IMatricula} from '../models/matricula.model';

export default class MatriculaRepository {


  async getMatricula():Promise<IMatricula[]> {
    const matriculaFind = await Matricula.find();

    return matriculaFind;
  }

  async getMatriculaById(_id: String): Promise<IMatricula> {

    const matricula: IMatricula = await Matricula.findById(_id);

    return matricula;
  }

  async insertMatricula(matricula: IMatricula) {
    const matriculaCreated = await Matricula.create(matricula);

    return matriculaCreated;
  }

  async updateMatricula(_id: String, matricula: IMatricula) {
    const matriculaupdate = await Matricula.updateOne({ _id }, matricula);

    return matriculaupdate;
  }
}
