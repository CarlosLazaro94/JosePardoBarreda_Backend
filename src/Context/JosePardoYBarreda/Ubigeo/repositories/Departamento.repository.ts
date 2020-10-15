import Departamentos , {IDepartamento} from '../models/Departamento.model'
export default class Departamentorepository {
  async insertDepartamento(departamento: IDepartamento) {
    const departamentoCreated = await Departamentos.create(departamento);

    return departamentoCreated;
  }

  async getDepartamentos() {
    const getdepartamentos = await Departamentos.find();

    return getdepartamentos;
  }

  async getDepartamentosById(id: string) {
    const getdepartamentobyid = await Departamentos.find({ id });
    return getdepartamentobyid;
  }
}
