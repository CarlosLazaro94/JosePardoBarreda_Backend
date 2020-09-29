import { IUsuario, Usuario } from '../models';

export default class UsuarioRepository {
  async insertUsuario(usuario: IUsuario) {
    const usuarioCreated = await Usuario.create(usuario);

    return usuarioCreated;
  }

  async getUsuarioAll() {
    const getusuarioall = await Usuario.find();

    return getusuarioall;
  }

  async getUsuarioById(_id: String):Promise<IUsuario> {
    const getusuariobyid:IUsuario = await Usuario.findOne(_id);

    return getusuariobyid;
  }

  async updateUsuario(_id: String, usuario: IUsuario) {
    const updateusuario = await Usuario.updateOne(_id, usuario);

    return updateusuario;
  }
}
