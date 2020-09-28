import {UsuarioRepository} from '../repositories'
import {Response, Request} from 'express'
import {IUsuario} from '../models'
 

export default class UsuarioController{

    repository:UsuarioRepository

    constructor(repository:UsuarioRepository){
        this.repository = repository;
        this.insertUsuario = this.insertUsuario.bind(this)
        this.getUsuarioAll = this.getUsuarioAll.bind(this)
        this.getUsuarioById = this.getUsuarioById.bind(this)
        this.updateusuario = this.updateusuario.bind(this)
    }

    async insertUsuario(req: Request, res: Response){
        const usuariocreated = await this.repository.insertUsuario(req.body)

        res.json(usuariocreated)
    }

    async getUsuarioAll(req: Request, res: Response){

        const getusuarioall= await this.repository.getUsuarioAll()

        res.json(getusuarioall)
    }

    async getUsuarioById(req:Request, res:Response){
        const _id = req.params._id
        const getusuariobyid= await this.repository.getUsuarioById(_id)
        res.json(getusuariobyid)

    }

    async updateusuario(req:Request, res:Response){
    
        const _id  = req.params._id
        const usuario:IUsuario = req.body

        const updateusuario = await this.repository.updateUsuario(_id,usuario)

        res.json(updateusuario)

    }

}