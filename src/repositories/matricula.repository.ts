//import { IMatricula, Matricula } from '../models';
import Matricula, { IMatricula } from '../models/Matricula.model';
export default class MatriculaRepository {
   
  

  async insertMatricula(matricula: IMatricula): Promise<IMatricula>{

    const matriculaCreated: IMatricula = await Matricula.create(matricula);

    return matriculaCreated;

  }

  async getMatricula(): Promise<IMatricula[]> {

    const matriculaFind = await Matricula.find();

    return matriculaFind;

  }

  async getMatriculaById(_id: String): Promise<IMatricula> {

    const matricula: IMatricula = await Matricula.findById(_id);

    return matricula;

  }

  async updateMatricula(_id: String, matricula: IMatricula): Promise<IMatricula> {

    const matriculaupdate: IMatricula = await Matricula.updateOne({ _id }, matricula);

    return matriculaupdate;

  }
}
