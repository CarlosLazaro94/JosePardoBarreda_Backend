import Usuario, { IUsuario } from '../models/Usuario.model'

export default class UsuarioRepository {
  //insertar usuario
  async insertUsuario(usuario: IUsuario): Promise<IUsuario> {

    const usuarioCreated: IUsuario = await Usuario.create(usuario);

    return usuarioCreated;

  }
  //traer todo los usuarios
  async getUsuarioAll(): Promise<IUsuario[]> {

    const getusuarioall: IUsuario[] = await Usuario.find();

    return getusuarioall;

  }
  //traer usuario por id
  async getUsuarioById(_id: String): Promise<IUsuario> {

    const getusuariobyid: IUsuario = await Usuario.findOne(_id);

    return getusuariobyid;

  }
  //actualizar usuario
  async updateUsuario(_id: String, usuario: IUsuario): Promise<IUsuario> {

    const updateusuario: any = await Usuario.findById(_id);
    const usuarioJSON: any = Object.assign({}, usuario);
    for (let el in usuarioJSON) {
      updateusuario[el] = usuarioJSON[el];
    }

    await updateusuario.save();

    return updateusuario;

  }
}
