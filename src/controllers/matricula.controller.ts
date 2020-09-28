import { MatriculaRepository } from "../repositories";
import {Response, Request} from 'express'
import { IMatricula } from "src/models";

export default class MatriculaController{

    repository:MatriculaRepository

    constructor(repository:MatriculaRepository){
        this.repository = repository;
        this.insertMatricula = this.insertMatricula.bind(this);
        this.getMatricula = this.getMatricula.bind(this);
        this.getMatriculaById = this.getMatriculaById.bind(this)
        this.updateMatricula = this.updateMatricula.bind(this)
    }

     async insertMatricula(req: Request, res: Response ){
        const matriculaCreated  = await this.repository.insertMatricula(req.body)

        res.json(matriculaCreated) 
    }

    async getMatricula(req:Request, res:Response){
        
        const findMatricula = await this.repository.getMatricula()

        res.json(findMatricula)

    }

    async getMatriculaById(req:Request, res:Response){
        const _id = req.params._id
        const findById= await this.repository.getMatriculaById(_id)
        res.json(findById)

    }

    async updateMatricula(req:Request, res:Response){
    
        const _id  = req.params._id
        const matricula:IMatricula = req.body

        const updateMatricula = await this.repository.updateMatricula(_id,matricula)

        res.json(updateMatricula)

    }
}