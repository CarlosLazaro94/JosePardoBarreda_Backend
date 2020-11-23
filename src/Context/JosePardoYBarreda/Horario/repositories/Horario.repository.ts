import Horario, { IHorario } from '../model/Horario.model'

export default class HorarioRepository {
  //insertar Horario
  async insertHorario(idHorario: IHorario): Promise<IHorario> {

    const HorarioCreated: IHorario = await Horario.create(idHorario);

    return HorarioCreated;

  }
  //traer todo los Horarios
  async getHorarioAll(): Promise<IHorario[]> {

    const getHorarioall: IHorario[] = await Horario.find();

    return getHorarioall;

  }
  //traer Horario por id
  async getHorarioById(_id: String): Promise<IHorario> {

    const getHorariobyid: IHorario = await Horario.findOne(_id);

    return getHorariobyid;

  }
  //actualizar Horario
  async updateHorario(_id: String, idHorario: IHorario): Promise<IHorario> {

    const updateHorario: any = await Horario.findById(_id);
    const HorarioJSON: any = Object.assign({}, idHorario);
    for (let el in HorarioJSON) {
      updateHorario[el] = HorarioJSON[el];
    }

    await updateHorario.save();

    return updateHorario;

  }
}
