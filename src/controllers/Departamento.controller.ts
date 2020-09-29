import { DepartamentoRepository } from "../repositories";
import {Response, Request} from 'express';

export default class DepartamentoController{

    repository:DepartamentoRepository

    constructor(repository:DepartamentoRepository){

        this.repository = repository
        this.insertDepartamento = this.insertDepartamento.bind(this)
        this.getDepartamentos = this.getDepartamentos.bind(this)
        this.getDepartamentosById = this.getDepartamentosById.bind(this)
    }


    async insertDepartamento(req: Request, res: Response ){
        const departamentoCreated  = await this.repository.insertDepartamento(req.body)

        res.json(departamentoCreated) 
    }

    async getDepartamentos(req: Request, res: Response){
            
        const getdepartamento = await this.repository.getDepartamentos()

        res.json(getdepartamento)

    }

    async getDepartamentosById(req: Request, res:Response){

        const id = req.params.id
        const getdepartamentobyid = await this.repository.getDepartamentosById(id)
            
        res.json(getdepartamentobyid)
    }

}